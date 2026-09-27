"use client";

import { ContactShadows, Grid, Html, OrbitControls } from "@react-three/drei";
import { Canvas, useThree, type ThreeEvent } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import * as THREE from "three";
import { SVGLoader } from "three/addons/loaders/SVGLoader.js";
import { formatHeight, niceStep, type Unit } from "@/lib/units";
import { shapeFor } from "./BoardCanvas";
import { headsForHeight, type Build, type Gender } from "./figures";
import { isAnimalKind } from "./animals";
import type { Subject } from "./types";

/** Scene units are metres; subject heights are centimetres. */
const M = 0.01;

type Props = {
  subjects: Subject[];
  unit: Unit;
  selectedId: string | null;
  onSelect: (id: string) => void;
  onCanvas?: (canvas: HTMLCanvasElement | null) => void;
};

// ---------------------------------------------------------------- mannequin

const UP = new THREE.Vector3(0, 1, 0);

function limb(a: THREE.Vector3, b: THREE.Vector3) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const length = dir.length();
  return {
    position: new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5),
    quaternion: new THREE.Quaternion().setFromUnitVectors(UP, dir.normalize()),
    length,
  };
}

function Mannequin({ heightCm, gender, build = "average", adult, color, selected }: {
  heightCm: number;
  gender: Gender;
  build?: Build;
  adult?: boolean;
  color: string;
  selected: boolean;
}) {
  const parts = useMemo(() => {
    const H = heightCm * M;
    const heads = headsForHeight(heightCm, adult);
    const hh = H / heads;
    const female = gender === "female";
    const childish = Math.max(0, Math.min(1, (7.5 - heads) / 3.5));
    const w = build === "slim" ? 0.9 : build === "broad" ? 1.14 : 1;
    const legFrac = 0.48 - childish * 0.08;
    const crotch = legFrac * H;
    const shoulder = H - hh * 1.3;
    const torsoLen = shoulder - crotch;
    const armpit = shoulder - torsoLen * 0.17;
    const waist = shoulder - torsoLen * 0.6;
    const hip = shoulder - torsoLen * 0.87;
    const shoulderHalf = (female ? 0.108 : 0.126) * H * w;
    const chestHalf = (female ? 0.094 : 0.108) * H * w;
    const waistHalf = (female ? 0.07 : 0.086) * H * w;
    const hipHalf = (female ? 0.1 : 0.094) * H * w;
    const neckR = (female ? 0.024 : 0.03) * H;

    const torso = new THREE.LatheGeometry(
      [
        new THREE.Vector2(0, crotch - 0.01 * H),
        new THREE.Vector2(hipHalf * 0.85, crotch),
        new THREE.Vector2(hipHalf, hip),
        new THREE.Vector2(waistHalf, waist),
        new THREE.Vector2(chestHalf, armpit),
        new THREE.Vector2(shoulderHalf * 0.92, shoulder - 0.01 * H),
        new THREE.Vector2(shoulderHalf * 0.55, shoulder + 0.012 * H),
        new THREE.Vector2(neckR, shoulder + 0.02 * H),
        new THREE.Vector2(0, shoulder + 0.022 * H),
      ],
      28,
    );

    const legC = hipHalf * 0.5;
    const kneeY = crotch * 0.52;
    const segs: { a: THREE.Vector3; b: THREE.Vector3; r: number }[] = [];
    for (const s of [-1, 1]) {
      const hipJ = new THREE.Vector3(s * legC, crotch + 0.02 * H, 0);
      const knee = new THREE.Vector3(s * legC * 0.9, kneeY, 0.004 * H);
      const ankle = new THREE.Vector3(s * legC * 0.85, 0.04 * H, 0);
      segs.push({ a: hipJ, b: knee, r: hipHalf * 0.46 });
      segs.push({ a: knee, b: ankle, r: 0.03 * H * w });
      segs.push({ a: new THREE.Vector3(s * legC * 0.85, 0.018 * H, -0.01 * H), b: new THREE.Vector3(s * legC * 0.95, 0.016 * H, 0.1 * H), r: 0.017 * H });
      const sh = new THREE.Vector3(s * (shoulderHalf - 0.012 * H), shoulder - 0.02 * H, 0);
      const elbow = new THREE.Vector3(s * (shoulderHalf + 0.012 * H), waist, -0.01 * H);
      const wrist = new THREE.Vector3(s * (shoulderHalf + 0.02 * H), crotch - 0.005 * H, 0.01 * H);
      segs.push({ a: sh, b: elbow, r: 0.03 * H * w });
      segs.push({ a: elbow, b: wrist, r: 0.024 * H * w });
      segs.push({ a: wrist, b: new THREE.Vector3(wrist.x, wrist.y - hh * 0.55, wrist.z), r: 0.019 * H });
    }
    segs.push({ a: new THREE.Vector3(0, shoulder, 0), b: new THREE.Vector3(0, H - hh * 0.85, 0.004 * H), r: neckR });

    return {
      torso,
      limbs: segs.map((s) => ({ ...limb(s.a, s.b), r: s.r })),
      head: { y: H - hh * 0.5, r: hh * (0.4 + childish * 0.04) },
      female,
      hh,
      H,
      dress: female
        ? { top: waistHalf * 1.05, bottom: hipHalf * 1.6, y0: waist, y1: crotch - legFrac * H * 0.3 }
        : null,
    };
  }, [heightCm, gender, build, adult]);

  const material = (
    <meshStandardMaterial color={color} roughness={0.55} metalness={0.05} emissive={selected ? color : "#000"} emissiveIntensity={selected ? 0.25 : 0} />
  );

  return (
    <group>
      <mesh geometry={parts.torso} scale={[1, 1, 0.62]} castShadow>
        {material}
      </mesh>
      {parts.limbs.map((l, i) => (
        <mesh key={i} position={l.position} quaternion={l.quaternion} castShadow>
          <capsuleGeometry args={[l.r, Math.max(l.length - l.r, 0.0001), 6, 14]} />
          {material}
        </mesh>
      ))}
      <mesh position={[0, parts.head.y, 0]} scale={[1, 1.18, 1.05]} castShadow>
        <sphereGeometry args={[parts.head.r, 28, 20]} />
        {material}
      </mesh>
      {parts.female && (
        <mesh position={[0, parts.head.y - parts.hh * 0.35, -parts.hh * 0.18]} scale={[1.08, 1.7, 0.75]} castShadow>
          <sphereGeometry args={[parts.head.r * 1.05, 24, 16]} />
          {material}
        </mesh>
      )}
      {parts.dress && (
        <mesh position={[0, (parts.dress.y0 + parts.dress.y1) / 2, 0]} scale={[1, 1, 0.75]} castShadow>
          <cylinderGeometry args={[parts.dress.top, parts.dress.bottom, parts.dress.y0 - parts.dress.y1, 28, 1, true]} />
          <meshStandardMaterial color={color} roughness={0.6} side={THREE.DoubleSide} emissive={selected ? color : "#000"} emissiveIntensity={selected ? 0.25 : 0} />
        </mesh>
      )}
    </group>
  );
}

// ---------------------------------------------------------- extruded shapes

const svgLoader = new SVGLoader();
const extrudeCache = new Map<string, THREE.ExtrudeGeometry>();

function extrude(d: string) {
  const hit = extrudeCache.get(d);
  if (hit) return hit;
  const data = svgLoader.parse(`<svg xmlns="http://www.w3.org/2000/svg"><path d="${d}"/></svg>`);
  const shapes = data.paths.flatMap((p) => SVGLoader.createShapes(p));
  const geo = new THREE.ExtrudeGeometry(shapes, { depth: 1, bevelEnabled: false, curveSegments: 10 });
  geo.translate(0, 0, -0.5);
  extrudeCache.set(d, geo);
  return geo;
}

/** Depth (front-to-back thickness) as a fraction of height, per shape. */
function depthRatio(s: Subject) {
  const k = s.object ?? "block";
  if (isAnimalKind(k)) return { car: 1.24, bus: 0.57, elephant: 0.45, horse: 0.25, giraffe: 0.18, trex: 0.35, brachiosaurus: 0.3 }[k as string] ?? 0.3;
  if (k === "door") return 0.02;
  return (s.aspect ?? 0.5) * 0.9;
}

function Extruded({ subject, selected }: { subject: Subject; selected: boolean }) {
  const shape = useMemo(() => shapeFor(subject), [subject]);
  const h = subject.heightCm * M;
  const depth = h * depthRatio(subject);
  return (
    <group position={[0, h, 0]} scale={[h, -h, depth]}>
      {shape.paths.map((d, i) => (
        <mesh key={i} geometry={extrude(d)} castShadow>
          <meshStandardMaterial
            color={subject.color}
            roughness={0.6}
            side={THREE.DoubleSide}
            emissive={selected ? subject.color : "#000"}
            emissiveIntensity={selected ? 0.25 : 0}
          />
        </mesh>
      ))}
    </group>
  );
}

function ImagePlane({ subject }: { subject: Subject }) {
  const texture = useMemo(() => {
    const tex = new THREE.TextureLoader().load(subject.image ?? "");
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, [subject.image]);
  const h = subject.heightCm * M;
  const w = h * (subject.aspect ?? 0.5);
  return (
    <mesh position={[0, h / 2, 0]}>
      <planeGeometry args={[w, h]} />
      <meshBasicMaterial map={texture} transparent side={THREE.DoubleSide} />
    </mesh>
  );
}

// ------------------------------------------------------------------- scene

const FOV = 35;
const tickStyle = { pointerEvents: "none", transform: "translate(-100%, -50%)" } as const;
const labelStyle = { pointerEvents: "none" } as const;

/** Frames the whole row (plus the measuring pole) for the canvas's current aspect ratio. */
function CameraRig({ minX, maxX, maxH }: { minX: number; maxX: number; maxH: number }) {
  const get = useThree((s) => s.get);
  const controlsReady = useThree((s) => !!s.controls);
  const aspect = useThree((s) => s.size.width / Math.max(s.size.height, 1));
  useEffect(() => {
    const { camera: cam, controls: ctl, invalidate } = get();
    const camera = cam as THREE.PerspectiveCamera;
    const controls = ctl as unknown as { target: THREE.Vector3; update: () => void } | null;
    const vHalf = ((FOV / 2) * Math.PI) / 180;
    const hHalf = Math.atan(Math.tan(vHalf) * aspect);
    const width = maxX - minX;
    const distance = Math.max((maxH * 1.3) / (2 * Math.tan(vHalf)), (width * 1.12) / (2 * Math.tan(hHalf))) + maxH * 0.25;
    const target: [number, number, number] = [(minX + maxX) / 2, maxH * 0.48, 0];
    camera.position.set(target[0] + distance * 0.15, target[1] + distance * 0.1, distance);
    camera.near = Math.max(distance / 2000, 0.005);
    camera.far = distance * 30;
    camera.updateProjectionMatrix();
    controls?.target.set(...target);
    controls?.update();
    invalidate();
  }, [get, controlsReady, aspect, minX, maxX, maxH]);
  return null;
}

export default function Board3D({ subjects, unit, selectedId, onSelect, onCanvas }: Props) {
  const layout = useMemo(() => {
    const maxH = Math.max(...subjects.map((s) => s.heightCm), 1) * M;
    const gap = maxH * 0.12;
    const widths = subjects.map((s) => s.heightCm * M * shapeFor(s).aspect);
    const rowW = widths.reduce((a, w) => a + w + gap, -gap);
    const xs: number[] = [];
    for (let i = 0, cursor = -rowW / 2; i < widths.length; i++) {
      xs.push(cursor + widths[i] / 2);
      cursor += widths[i] + gap;
    }
    const step = niceStep(maxH / M, 6) * M;
    // Rough scene size for lights, grid fade and zoom limits.
    const distance = Math.max(maxH * 2.2, rowW * 1.3);
    return { maxH, xs, rowW, distance, step };
  }, [subjects]);

  const rulerX = -layout.rowW / 2 - layout.maxH * 0.18;
  const ticks = Array.from({ length: Math.floor((layout.maxH * 1.05) / layout.step) + 1 }, (_, i) => i * layout.step);

  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      camera={{ fov: FOV, position: [0, layout.maxH, layout.distance] }}
      gl={{ antialias: true, preserveDrawingBuffer: true }}
      onCreated={({ gl }) => onCanvas?.(gl.domElement)}
      onPointerMissed={() => undefined}
    >
      <color attach="background" args={["#f8fafc"]} />
      <hemisphereLight args={["#ffffff", "#cbd5e1", 1.1]} />
      <directionalLight
        position={[layout.maxH * 1.5, layout.maxH * 3, layout.maxH * 2]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <OrbitControls makeDefault enableDamping={false} maxPolarAngle={Math.PI * 0.49} minDistance={layout.maxH * 0.3} maxDistance={layout.distance * 4} />
      <CameraRig minX={rulerX - layout.maxH * 0.22} maxX={layout.rowW / 2} maxH={layout.maxH} />

      <Grid
        infiniteGrid
        cellSize={layout.step / 5}
        sectionSize={layout.step}
        cellColor="#e2e8f0"
        sectionColor="#cbd5e1"
        fadeDistance={layout.distance * 3}
        fadeStrength={1.5}
        position={[0, -0.0005, 0]}
      />
      <ContactShadows position={[0, 0.0005, 0]} scale={Math.max(layout.rowW, layout.maxH) * 2} far={layout.maxH} blur={2.2} opacity={0.35} resolution={512} />

      {/* Measuring pole */}
      <mesh position={[rulerX, (layout.maxH * 1.05) / 2, 0]}>
        <boxGeometry args={[layout.maxH * 0.006, layout.maxH * 1.05, layout.maxH * 0.006]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>
      {ticks.map((v) => (
        <group key={v} position={[rulerX, v, 0]}>
          <mesh>
            <boxGeometry args={[layout.maxH * 0.04, layout.maxH * 0.003, layout.maxH * 0.003]} />
            <meshStandardMaterial color="#94a3b8" />
          </mesh>
          <Html position={[-layout.maxH * 0.03, 0, 0]} style={tickStyle}>
            <span className="whitespace-nowrap text-[11px] font-medium text-slate-500">{formatHeight(v / M, unit)}</span>
          </Html>
        </group>
      ))}

      {subjects.map((s, i) => {
        const selected = s.id === selectedId;
        const onClick = (e: ThreeEvent<MouseEvent>) => {
          e.stopPropagation();
          onSelect(s.id);
        };
        return (
          <group key={s.id} position={[layout.xs[i], 0, 0]} onClick={onClick}>
            {s.kind === "male" || s.kind === "female" ? (
              <Mannequin heightCm={s.heightCm} gender={s.kind} build={s.build} adult={s.adult} color={s.color} selected={selected} />
            ) : s.kind === "image" && s.image ? (
              <ImagePlane subject={s} />
            ) : (
              <Extruded subject={s} selected={selected} />
            )}
            <Html position={[0, s.heightCm * M + layout.maxH * 0.03, 0]} center style={labelStyle}>
              <div className="whitespace-nowrap rounded-md bg-white/85 px-1.5 py-0.5 text-center leading-tight shadow-sm">
                <div className="text-[11px] font-bold text-slate-900">{s.name}</div>
                <div className="text-[11px] font-semibold" style={{ color: s.color }}>
                  {formatHeight(s.heightCm, unit)}
                </div>
              </div>
            </Html>
          </group>
        );
      })}
    </Canvas>
  );
}

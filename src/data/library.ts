import { overallFromReference, type AnimalKind } from "@/components/board/animals";
import type { Build, ObjectKind } from "@/components/board/figures";

export type LibraryCategory = "generic" | "celebrity" | "athlete" | "character" | "record" | "animal" | "object";

export type LibraryItem = {
  id: string;
  name: string;
  heightCm: number;
  category: LibraryCategory;
  kind: "male" | "female" | "object";
  object?: ObjectKind;
  aspect?: number;
  build?: Build;
  /** Draw with adult proportions even when short (e.g. adults with dwarfism). */
  adult?: boolean;
  /** Extra search terms, e.g. native-script names (ルフィ, विराट कोहली). */
  aliases?: string[];
  color?: string;
};

const p = (
  id: string,
  name: string,
  heightCm: number,
  category: LibraryCategory,
  kind: "male" | "female",
  extra: Partial<LibraryItem> = {},
): LibraryItem => ({ id, name, heightCm, category, kind, ...extra });

const o = (id: string, name: string, heightCm: number, object: ObjectKind, aspect?: number, color?: string): LibraryItem => ({
  id,
  name,
  heightCm,
  category: "object",
  kind: "object",
  object,
  aspect,
  color,
});

/** Animals are listed by their standard measurement (shoulder, hip or overall) and converted to silhouette height. */
const a = (id: string, name: string, kind: AnimalKind, referenceCm: number, color: string): LibraryItem => ({
  id,
  name,
  heightCm: overallFromReference(kind, referenceCm),
  category: "animal",
  kind: "object",
  object: kind,
  color,
});

/** Commonly reported heights; subject pages cite sources per entry. */
export const library: LibraryItem[] = [
  // Athletes
  p("lebron-james", "LeBron James", 206, "athlete", "male", { build: "broad", aliases: ["르브론", "Леброн"] }),
  p("michael-jordan", "Michael Jordan", 198, "athlete", "male"),
  p("stephen-curry", "Stephen Curry", 188, "athlete", "male"),
  p("shaquille-oneal", "Shaquille O'Neal", 216, "athlete", "male", { build: "broad" }),
  p("yao-ming", "Yao Ming", 229, "athlete", "male"),
  p("victor-wembanyama", "Victor Wembanyama", 224, "athlete", "male", { build: "slim" }),
  p("kevin-durant", "Kevin Durant", 211, "athlete", "male", { build: "slim" }),
  p("giannis-antetokounmpo", "Giannis Antetokounmpo", 211, "athlete", "male"),
  p("kobe-bryant", "Kobe Bryant", 198, "athlete", "male"),
  p("luka-doncic", "Luka Dončić", 198, "athlete", "male"),
  p("muggsy-bogues", "Muggsy Bogues", 160, "athlete", "male", { adult: true }),
  p("lionel-messi", "Lionel Messi", 170, "athlete", "male", { adult: true, aliases: ["메시", "Месси", "ميسي"] }),
  p("cristiano-ronaldo", "Cristiano Ronaldo", 187, "athlete", "male", { aliases: ["호날두", "Роналду", "رونالدو"] }),
  p("kylian-mbappe", "Kylian Mbappé", 178, "athlete", "male"),
  p("erling-haaland", "Erling Haaland", 194, "athlete", "male"),
  p("neymar", "Neymar Jr", 175, "athlete", "male"),
  p("virat-kohli", "Virat Kohli", 175, "athlete", "male", { aliases: ["विराट कोहली"] }),
  p("sachin-tendulkar", "Sachin Tendulkar", 165, "athlete", "male", { adult: true, aliases: ["सचिन तेंदुलकर"] }),
  p("usain-bolt", "Usain Bolt", 195, "athlete", "male"),
  p("roger-federer", "Roger Federer", 185, "athlete", "male"),
  p("novak-djokovic", "Novak Djokovic", 188, "athlete", "male", { build: "slim" }),
  p("serena-williams", "Serena Williams", 175, "athlete", "female", { build: "broad" }),
  p("simone-biles", "Simone Biles", 142, "athlete", "female", { adult: true }),
  p("mike-tyson", "Mike Tyson", 178, "athlete", "male", { build: "broad" }),
  p("hafthor-bjornsson", "Hafþór Björnsson", 206, "athlete", "male", { build: "broad" }),

  // Celebrities
  p("dwayne-johnson", "Dwayne Johnson", 196, "celebrity", "male", { build: "broad" }),
  p("tom-cruise", "Tom Cruise", 170, "celebrity", "male", { adult: true }),
  p("kevin-hart", "Kevin Hart", 163, "celebrity", "male", { adult: true }),
  p("taylor-swift", "Taylor Swift", 178, "celebrity", "female", { build: "slim" }),
  p("zendaya", "Zendaya", 178, "celebrity", "female", { build: "slim" }),
  p("tom-holland", "Tom Holland", 173, "celebrity", "male"),
  p("ariana-grande", "Ariana Grande", 153, "celebrity", "female", { adult: true, build: "slim" }),
  p("selena-gomez", "Selena Gomez", 165, "celebrity", "female", { adult: true }),
  p("billie-eilish", "Billie Eilish", 161, "celebrity", "female", { adult: true }),
  p("keanu-reeves", "Keanu Reeves", 186, "celebrity", "male"),
  p("chris-hemsworth", "Chris Hemsworth", 190, "celebrity", "male", { build: "broad" }),
  p("gal-gadot", "Gal Gadot", 178, "celebrity", "female", { build: "slim" }),
  p("danny-devito", "Danny DeVito", 147, "celebrity", "male", { adult: true, build: "broad" }),
  p("peter-dinklage", "Peter Dinklage", 135, "celebrity", "male", { adult: true }),
  p("shah-rukh-khan", "Shah Rukh Khan", 173, "celebrity", "male", { adult: true, aliases: ["शाहरुख खान", "SRK"] }),
  p("amitabh-bachchan", "Amitabh Bachchan", 188, "celebrity", "male", { aliases: ["अमिताभ बच्चन"] }),
  p("deepika-padukone", "Deepika Padukone", 174, "celebrity", "female", { build: "slim", aliases: ["दीपिका पादुकोण"] }),
  p("elon-musk", "Elon Musk", 188, "celebrity", "male"),
  p("barack-obama", "Barack Obama", 185, "celebrity", "male", { build: "slim" }),
  p("donald-trump", "Donald Trump", 190, "celebrity", "male", { build: "broad" }),

  // Records & averages
  p("average-man", "Average man (world)", 170.8, "record", "male", { aliases: ["average height"] }),
  p("average-woman", "Average woman (world)", 158.6, "record", "female", { adult: true, aliases: ["average height"] }),
  p("robert-wadlow", "Robert Wadlow", 272, "record", "male", { build: "slim" }),
  p("sultan-kosen", "Sultan Kösen", 251, "record", "male", { build: "slim" }),
  p("jyoti-amge", "Jyoti Amge", 63, "record", "female", { adult: true }),

  // Characters (official profile heights)
  p("goku", "Goku", 175, "character", "male", { build: "broad", aliases: ["손오공", "Гоку", "孫悟空", "悟空", "Son Goku"] }),
  p("vegeta", "Vegeta", 164, "character", "male", { adult: true, build: "broad", aliases: ["베지터", "Вегета", "ベジータ"] }),
  p("naruto", "Naruto Uzumaki", 166, "character", "male", { adult: true, aliases: ["나루토", "Наруто", "うずまきナルト", "ナルト"] }),
  p("sasuke", "Sasuke Uchiha", 168, "character", "male", { adult: true, aliases: ["사스케", "Саскэ", "Саске", "うちはサスケ", "サスケ"] }),
  p("luffy", "Monkey D. Luffy", 174, "character", "male", { aliases: ["루피", "Луффи", "モンキー・D・ルフィ", "ルフィ"] }),
  p("zoro", "Roronoa Zoro", 181, "character", "male", { build: "broad", aliases: ["조로", "Зоро", "ロロノア・ゾロ", "ゾロ"] }),
  p("levi-ackerman", "Levi Ackerman", 160, "character", "male", { adult: true, aliases: ["리바이", "Леви", "リヴァイ", "Levi"] }),
  p("eren-yeager", "Eren Yeager", 183, "character", "male", { aliases: ["에렌", "Эрен", "エレン・イェーガー", "エレン", "Eren Jaeger"] }),
  p("gojo-satoru", "Satoru Gojo", 190, "character", "male", { build: "slim", aliases: ["고죠 사토루", "Годжо Сатору", "五条悟", "Gojo Satoru"] }),
  p("tanjiro-kamado", "Tanjiro Kamado", 165, "character", "male", { adult: true, aliases: ["탄지로", "Танджиро", "竈門炭治郎", "炭治郎"] }),
  p("nezuko-kamado", "Nezuko Kamado", 153, "character", "female", { adult: true, aliases: ["네즈코", "Нэдзуко", "竈門禰豆子", "禰豆子"] }),

  // Animals & dinosaurs (reference: shoulder height for cat/dogs/horse/elephant, hip for T. rex, overall otherwise)
  a("house-cat", "House cat", "cat", 25, "#78716c"),
  a("chihuahua", "Chihuahua", "dog", 20, "#a16207"),
  a("labrador", "Labrador Retriever", "dog", 57, "#b45309"),
  a("great-dane", "Great Dane", "dog", 80, "#57534e"),
  a("horse", "Horse", "horse", 160, "#7c2d12"),
  a("african-elephant", "African elephant (bull)", "elephant", 320, "#64748b"),
  a("giraffe", "Giraffe (male)", "giraffe", 550, "#ca8a04"),
  a("ostrich", "Ostrich", "ostrich", 250, "#44403c"),
  a("emperor-penguin", "Emperor penguin", "penguin", 115, "#1e293b"),
  a("t-rex", "Tyrannosaurus rex", "trex", 370, "#15803d"),
  a("brachiosaurus", "Brachiosaurus", "brachiosaurus", 1200, "#0f766e"),

  // Objects & landmarks
  o("door", "Standard door", 203, "door", 0.4),
  o("car", "Sedan car", 145, "car", undefined, "#475569"),
  o("bus", "Double-decker bus", 438, "bus", undefined, "#b91c1c"),
  o("hoop", "Basketball hoop (rim)", 305, "block", 0.1),
  o("house", "Two-storey house", 800, "building", 1.3),
  o("oak", "Oak tree", 2200, "tree", 0.9),
  o("statue-of-liberty", "Statue of Liberty (with pedestal)", 9300, "tower", 0.25),
  o("eiffel-tower", "Eiffel Tower", 33000, "tower", 0.38),
  o("empire-state", "Empire State Building", 44300, "building", 0.14),
  o("burj-khalifa", "Burj Khalifa", 82800, "tower", 0.12),
];

export const libraryById = new Map(library.map((item) => [item.id, item]));

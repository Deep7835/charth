import type { BoardUi } from "@/components/board/HeightBoard";
import type { SiteMessages } from "@/i18n/site";

export function boardUi(site: SiteMessages): BoardUi {
  return {
    confirmResetTitle: site.confirmResetTitle,
    confirmResetBody: site.confirmResetBody,
    confirmReset: site.confirmReset,
    cancel: site.cancel,
    invalidHeight: site.invalidHeight,
    copyFailed: site.copyFailed,
  };
}

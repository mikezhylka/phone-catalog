import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import ArrowLeftIcon from "@/assets/img/icons/arrow-left.svg?react";

export const BackButton = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const navigateBack = () => navigate(-1);

  return (
    <button
      className="flex items-center gap-1 pr-4 transition-transform hover:cursor-pointer hover:scale-110"
      onClick={navigateBack}
    >
      <div className="w-4 h-4 shrink-0">
        <ArrowLeftIcon />
      </div>
      <span className="text-small text-secondary">{t("back")}</span>
    </button>
  );
};

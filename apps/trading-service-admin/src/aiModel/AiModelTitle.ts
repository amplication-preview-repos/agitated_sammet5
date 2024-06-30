import { AiModel as TAiModel } from "../api/aiModel/AiModel";

export const AIMODEL_TITLE_FIELD = "id";

export const AiModelTitle = (record: TAiModel): string => {
  return record.id?.toString() || String(record.id);
};

export type ScenarioCategory = 'Бурение' | 'ТКРС';

export interface ScenarioData {
  id: number;
  category: ScenarioCategory;
  title: string;
  image: string;
  notification: string;
  cause: string;
}

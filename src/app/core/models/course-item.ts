export interface CourseItemModel {
    id?: number;
    name: string;
    date: string | Date;
    duration: number;
    description: string;
    topRated?: boolean;
    authors?: string[];
}

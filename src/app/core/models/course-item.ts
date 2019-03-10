export interface AuthorsModel {
    id: string;
    name: string;
}

export interface CourseItemModel {
    id?: number;
    name: string;
    date: string | Date;
    duration: number;
    description: string;
    topRated?: boolean;
    authors?: Array<AuthorsModel>;
}

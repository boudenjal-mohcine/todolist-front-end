export interface Todo {
    _id: string;
    user_id: string;
    title: string;
    description: string;
    isDone: boolean;
    __v?: number;
}

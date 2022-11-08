/// <reference types="@astrojs/image/client" />

interface Page {
    id: number
    attributes: {
        isParent: boolean;
        title: string;
        slug: string;
        content: string;
        childrenPages: {
            data?: Page[];
        }
    }
}
interface FlatPage {
    id: number
    isParent: boolean;
    title: string;
    slug: string;
    content: string;
    childrenPages: {
        data?: Page[];
    }
}
interface Meta {
    pagination: {
        total: number;
        pageCount: number;
        page: number;
        pageSize: number;
    }
}
interface StrapiResponse<T> {
    data: T[];
    meta: Meta;
}
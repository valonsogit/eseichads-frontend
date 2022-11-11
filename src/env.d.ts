/// <reference types="@astrojs/image/client" />

interface Page {
    id: number
    attributes: {
        displayChildren: boolean;
        isParent: boolean;
        title: string;
        slug: string;
        content: string;
        childrenPages: {
            data?: Page[];
        }
        parentPage: {
            data?: Page;
        }
    }
}
interface FlatPage {
    id: number
    isParent: boolean;
    displayChildren: boolean;
    title: string;
    slug: string;
    content: string;
    childrenPages: {
        data?: Page[];
    }
    parentPage: {
        data?: Page;
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
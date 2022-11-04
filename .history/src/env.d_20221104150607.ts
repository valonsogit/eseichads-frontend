/// <reference types="@astrojs/image/client" />

interface TopLevelPage {
    id: number
    attributes: {
        title: string;
        slug: string;
        html: string;
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
    data: []
    meta: Meta;
}
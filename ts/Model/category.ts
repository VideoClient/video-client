
export interface ICategory{
    [index:string]: string[]
}

export class CategoryModel {
    public addNewCategory(obj:ICategory) {
        this.data = Object.assign(this.data, obj)
    }

    public addSubCategory(obj:ICategory) {
        this.subcategory = Object.assign(this.subcategory, obj)
    }

    public setNewCategory(obj:ICategory) {
        this.data = obj
    }

    public setSubCategory(obj:ICategory) {
        this.subcategory = obj
    }

    public removeAll() {
        this.data = {}
        this.subcategory = {}
    }

    public resetCategory() {
        this.data = this.default
        this.subcategory = {}
    }

    private main: string[] = [
        '电影', '连续剧', '动漫', '记录片'
    ]

    private subcategory: ICategory = {}

    private data: ICategory = {
        '电影': ['/home/movie', 'img/film.png'],
        '连续剧': ['/home/series', 'img/series.svg'],
        '科技': ['/home/', 'img/science.png'],
        '纪录片': ['/home/', 'img/book.svg'],
        '教育': ['/home/', 'img/education.png'],
        '娱乐': ['/home/', 'img/game.png'],
        '动漫': ['/home/animate', 'img/animate.png'],
    }
    private default: ICategory = Object.assign({}, this.data); 
}
interface ISingleFolder {
    _id: string | number,
    name: string,
    file: ISingleFolder[] | [],
    folder: ISingleFolder[] | [],
}

interface IResFolder {
    message: string,
    data: ISingleFolder[]
}


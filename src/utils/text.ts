const queryStringToString = (queryString: string | string[] | undefined) => {
    if(!queryString) return "";
    if(Array.isArray(queryString)) return queryString[0];
    return queryString;
}

const formatBytes = (bytes: number) => {
    if (!+bytes) return "0 Bytes";
    const decimals = 2;
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export {
    queryStringToString,
    formatBytes
}
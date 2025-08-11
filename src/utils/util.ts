const getImagePrefix = () => {
    return process.env.NODE_ENV === "production"
        ? "DIEIT/"
        : "";
};

export { getImagePrefix };
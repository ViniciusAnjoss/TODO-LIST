const validatetitle = (request, response, next) => {
    const { body } = request;

    if (body.title === undefined) {
        return response
            .status(400)
            .json({ message: "o campo title não pode ser undefined" });
    }
    if (body.title === "") {
        return response
            .status(400)
            .json({ message: "o campo title não pode ser vazio" });
    }

    next();
};

const validateStatus = (request, response, next) => {
    const { body } = request;

    if (body.status === undefined) {
        return response
            .status(400)
            .json({ message: "o campo status não pode ser undefined" });
    }
    if (body.status === "") {
        return response
            .status(400)
            .json({ message: "o campo status não pode ser vazio" });
    }

    next();
};

module.exports = {
    validatetitle,
    validateStatus,
};

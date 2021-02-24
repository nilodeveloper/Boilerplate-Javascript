const error = (log, error) => {
    const err = {
        message: log,
        erro: error
    }
    return err
}

module.exports = error
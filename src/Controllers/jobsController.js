export const createJobs = (req, res) => {
    console.log(req.body);
    return res.status(201).json({
        message: "Jobs created Successfully",

        body: req.body

    });
}


export const getJobs = (req, res) => {
    return res.status(200).json({
        message: "welcome o jobs"
    });
}

export const getJobsById = (req, res) => {
    return res.json({
        message: "Welcome to the tweet routes",
        id: req.params.id
    });
}
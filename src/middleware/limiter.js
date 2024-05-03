import rateLimit from "express-rate-limit";


const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute window
    max: 5, // limit each IP to 10 requests per windowMs
    message: 'Too many requests, please try again later.',
    keyGenerator: (req) => req.ip,
    handler: (req, res, next) => {
        console.log("Rate limit exceeded"); // Log when rate limit is exceeded
        res.status(429).json({ message: 'Too many requests, please try again later.' });
    },
});

export const limiterPerUser = (req, res, next) => {
    console.log("Rate limiter middleware executed");
    limiter(req, res, next);
};




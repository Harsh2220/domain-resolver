import cors, { CorsOptions } from "cors";
import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import { rateLimit } from 'express-rate-limit';
import apt from "./routes/apt";
import arb from "./routes/arb";
import bnb from "./routes/bnb";
import eth from "./routes/eth";
import sol from "./routes/sol";

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

const limiter = rateLimit({
    windowMs: 1000,
    limit: 1,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    message: "Too many requests"
})

const whitelist = ['http://localhost:8000']
const corsOptions = {
    origin: function (origin: string, callback: (arg0: Error | null, arg1: boolean | undefined) => void) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'), false)
        }
    }
}

app.use(cors(corsOptions as CorsOptions));
app.use(limiter);

app.use("/api/eth", eth);
app.use("/api/bnb", bnb);
app.use("/api/arb", arb);
app.use("/api/apt", apt);
app.use("/api/sol", sol);

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});

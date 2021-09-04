
import { IResolvers } from "@graphql-tools/utils";
import { database } from "../data/data.store";

const query: IResolvers = {
    Query: {
        estudiantes(): any {
            return database.estudiantes;
        },
        cursos(): any {
            return database.cusrsos;
        }
    }
}

export default query;
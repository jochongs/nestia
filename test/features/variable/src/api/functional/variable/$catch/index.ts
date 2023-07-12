/**
 * @packageDocumentation
 * @module api.functional.variable.$catch
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";

/**
 * @controller VariableController.catch()
 * @path GET /variable/catch
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function $catch(
    connection: IConnection,
): Promise<void> {
    return Fetcher.fetch(
        connection,
        $catch.ENCRYPTED,
        $catch.METHOD,
        $catch.path(),
    );
}
export namespace $catch {

    export const METHOD = "GET" as const;
    export const PATH: string = "/variable/catch";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (): string => {
        return `/variable/catch`;
    }
}
export interface HttpRequest {
  url: string;
  headers?: Record<string, string>;
}

export class HttpError extends Error {}

export class JsonParseError extends Error {}

export const get = async <TResult>(
  request: HttpRequest,
  typeGuard?: (res: any) => res is TResult
): Promise<TResult> => {
  const res = await fetch(request.url, { headers: request.headers });

  await validateResponse(res);

  return parseJson(await res.text(), typeGuard);
};

const validateResponse = async (res: Response) => {
  if (!res.ok) {
    throw new HttpError(
      `Failed request, http status: ${res.status}, text: ${await res.text()}`
    );
  }
};

const parseJson = <T>(json: string, typeGuard?: (res: any) => res is T): T => {
  try {
    const object = JSON.parse(json);

    if (typeGuard && !typeGuard(object)) {
      throw new JsonParseError(
        "Invalid JSON [Not matching target object structure]"
      );
    }

    return object;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new JsonParseError(`Invalid JSON [${error}]`);
    }

    throw error;
  }
};

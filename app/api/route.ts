export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    const test = JSON.stringify(
        {
            something: "hihi"
        }
    )
    return new Response(test, {
        status: 200
    });
}
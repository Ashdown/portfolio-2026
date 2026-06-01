import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name } = body;

    if (!name || name.trim() === "") {
      return NextResponse.json(
        { error: "Thing name is required" },
        { status: 400 }
      );
    }

    // TODO: Save to database
    const newThing = {
      id: Date.now(),
      name,
      createdAt: new Date(),
    };

    console.log('newThing')
    console.log(newThing)

    return NextResponse.json(newThing, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create thing" },
      { status: 500 }
    );
  }
}

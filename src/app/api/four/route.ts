import { sendMail } from "../../service/mailService";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const json = await request.json();

    await sendMail(
      "TEST",
      "abdulrazzaquenixx@gmail.com",
      "THI IS A TEST FOR MY MEDIUM USERS"
    );

    let json_response = {
      status: "success",
    };
    return new NextResponse(JSON.stringify(json_response), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.log(error)
    let error_response = {
      status: "error",
      message: error.message,
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}


export async function GET(request: Request) {
  try {
    const json = await request.json();

    await sendMail(
      "TEST",
      "dontkillme@bunnyfiedlabs.com",
      "THI IS A TEST FOR MY MEDIUM USERS"
    );

    let json_response = {
      status: "success",
    };
    return new NextResponse(JSON.stringify(json_response), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      let error_response = {
        status: "fail",
        message: "Feedback with title already exists",
      };
      return new NextResponse(JSON.stringify(error_response), {
        status: 409,
        headers: { "Content-Type": "application/json" },
      });
    }

    let error_response = {
      status: "error",
      message: error.message,
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
import { NextResponse } from "next/server";
import { db } from "../../../../db";


export async function GET(req: Request) {
 return NextResponse.json({success: true})
}

export async function POST(req:Request) {
  try {
    const body = await req.json();
    const {email, username, password} = body;

    const existingUserByEmail = await db.user1.findUnique({
      where:{email}
    });

    if (existingUserByEmail) {
     return NextResponse.json({user:null , message: "User with this email already exists"}, {status: 409} )
    }   
    
    const existingUserByUserName = await db.user1.findUnique({
      where:{username}
    });

    if (existingUserByUserName) {
     return NextResponse.json({user:null , message: "User with this user name already exists"}, {status: 409} )
    }  

    const newUser = await db.user1.create({
      data:{
        username,
        email,
        password
      }
    })


    return NextResponse.json(body);




  } catch (error) {
    
  }
}

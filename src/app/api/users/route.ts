import { NextResponse } from "next/server";
import { db } from "../../../../db";
import { hash } from "bcrypt";
import * as z from "zod";


const userSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
  })



export async function POST(req:Request) {
  try {
    const body = await req.json();
    const {email, username, password} = userSchema.parse(body);

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

    const hashedPassword =  await hash(password, 10);
    const newUser = await db.user1.create({
      data:{
        username,
        email,
        password: hashedPassword
      }
    })

    const {password:NewUserPassword, ...rest} = newUser;


    return NextResponse.json({user: rest, message: 'User Created successfully'}, {status: 201});




  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong!'}, {status: 50});

  }
}

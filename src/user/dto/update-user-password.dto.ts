import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class UpdateUserPasswordDto {

    @IsNotEmpty({
        message: "密码不能为空"
    })
    @MinLength(6, {
        message: "密码不能少于6位"
    })
    @ApiProperty()
    password: string

    @IsNotEmpty({
        message: '用户名不能为空'
    })
    @ApiProperty()
    username: string;

    @IsEmail({}, {
        message: "不是合法的邮箱格式"
    })
    @ApiProperty()
    email: string

    @IsNotEmpty({
        message: "验证码不能为空"
    })
    @ApiProperty()
    captcha: string
}
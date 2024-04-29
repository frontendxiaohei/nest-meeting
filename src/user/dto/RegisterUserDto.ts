import { IsEmail, IsNotEmpty, MinLength } from "class-validator"

export class RegisterUserDto {
    @IsNotEmpty({
        message: "用户名不能为空"
    })
    username: string
    @IsNotEmpty({
        message: "昵称不能为空"
    })
    nickName: string
    
    @IsNotEmpty({message: "密码不能为空"})
    @MinLength(6, {
        message: "密码不能少于6位"
    })
    password: string
    @IsEmail({}, {
        message: "不是合法的邮箱"
    })
    email: string
    @IsNotEmpty({
        message: "验证码不能为空"
    })
    captcha: string
}
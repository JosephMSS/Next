import { cn } from "app/utils/cn";

interface ITypographyProps {
    children: React.ReactElement;
}
interface TypographyProps {
    children: React.ReactNode;
}
const Typography = ({ children }: ITypographyProps) => {
    return <>{children}</>
}
type TypographyType = React.HTMLAttributes<HTMLHeadingElement> & TypographyProps;
const H2 = (props: TypographyType) => {
    return <h2 {...props} className={cn(props.className, "text-6xl font-playfair font-bold text-center my-20 tracking-tighter")}>{props.children}</h2>
}
Typography.H2 = H2;

export default Typography;
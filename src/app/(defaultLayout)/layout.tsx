import "../globals.css";
import { Promo } from "#/services/advertising/widgets/promo";
import { Header } from "#/structures/gadgets/header/ui/Header";
import { TopMenu } from "#/structures/gadgets/topMenu";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <header>
                <Promo />
                <Header />
                <TopMenu />
            </header>
            <div>
                {children}
            </div>
        </div>
    );
}
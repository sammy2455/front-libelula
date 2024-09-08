export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  	return (
        <>
			<main className="min-h-screen">
				{children}
			</main>
		</>
  	);
}

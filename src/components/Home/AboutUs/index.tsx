const AboutUs = () => {
    return (
        <section className="bg-white dark:bg-gray-900 py-20" id="about-section">
            <div className="container mx-auto px-4 lg:max-w-screen-xl">
                <div className="text-center mb-12">
                    <p className="text-sky-600 uppercase tracking-[0.3em] mb-4">Sobre Nós</p>
                    <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 dark:text-white">
                        Conectando fé e tecnologia para transformar doações
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <p className="text-lg text-gray-700 dark:text-white/80 mb-6">
                            Somos uma equipe apaixonada por inovação e guiada por propósito. Criamos este sistema para ajudar igrejas a arrecadarem doações com mais facilidade, transparência e impacto.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-white/80 mb-6">
                            Acreditamos que a tecnologia pode ser uma aliada poderosa na missão de espalhar o bem, fortalecer a comunidade e permitir que líderes tenham mais controle e clareza sobre suas finanças.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-white/80">
                            Com nosso sistema, sua igreja ganha uma ferramenta moderna, segura e intuitiva — e você, mais tempo e tranquilidade para cuidar do que realmente importa: as pessoas.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <img src="/Images/About/team-church.jpg" alt="Equipe do projeto" className="rounded-2xl shadow-lg w-full max-w-md" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;

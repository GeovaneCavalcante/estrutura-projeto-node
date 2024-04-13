import * as fs from 'fs';
import * as path from 'path';


let schemaContent: string = "";

// Faz a leitura do arquivo com as confiracoes base
const schemaPath: string = path.join(__dirname, 'prisma', 'schema.prisma');
const content: string = fs.readFileSync(path.join(__dirname, 'prisma', 'base.prisma'), { encoding: 'utf8' });
schemaContent += `${content}\n`;

// Busca recursivamente os diretórios de domínio que estao dentro de models. Exemplo: users, products, etc.
const modulesDir = path.join(__dirname, '..', '..', '..', 'modules');
const directories = fs.readdirSync(modulesDir, { withFileTypes: true });

for (const directore of directories) {
    // Busca cada subdomínio dentro de modules
    const modelsDirectory: string = path.join(`${directore.path}/${directore.name}`, "infra", "models");
    // Verifica se existe arquivos dentro de models
    if (fs.existsSync(modelsDirectory)) {
        // Busca todos arquivos com a extensao .prisma de models
        const modelFiles: string[] = fs.readdirSync(modelsDirectory)
            .filter(file => file.endsWith('.prisma'));
        // Extrai o conteúdo dos arquivos .prisma encontrados e unifica
        modelFiles.forEach(file => {
            console.log(`file read ${path.join(modelsDirectory, file)}`)
            const content: string = fs.readFileSync(path.join(modelsDirectory, file), { encoding: 'utf8' });
            schemaContent += `\n${content}\n`;
        });
    }
}
fs.writeFileSync(schemaPath, schemaContent);
console.log(`combined files in prisma.base`)

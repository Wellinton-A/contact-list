import { Contact } from '../store/contacts/contact.reducer'

import { colors } from '../style/colors'

const contatos: Contact[] = [
  {
    id: 1,
    nome: 'Ana Silva',
    telefone: '(11) 91234-5678',
    email: 'anasilva@example.com',
    editando: false,
    marcado: false,
    cor: colors.yellow
  },
  {
    id: 2,
    nome: 'Lucas Oliveira',
    telefone: '(21) 92345-6789',
    email: 'lucasoliveira@example.com',
    editando: false,
    marcado: false,
    cor: colors.lightBlue
  },
  {
    id: 3,
    nome: 'Bianca Costa',
    telefone: '(31) 93456-7890',
    email: 'biancacosta@example.com',
    editando: false,
    marcado: false,
    cor: colors.gray
  },
  {
    id: 4,
    nome: 'Pedro Santos',
    telefone: '(41) 94567-8901',
    email: 'pedrosantos@example.com',
    editando: false,
    marcado: false,
    cor: colors.beige
  },
  {
    id: 5,
    nome: 'Carla Rodrigues',
    telefone: '(51) 95678-9012',
    email: 'carlarodrigues@example.com',
    editando: false,
    marcado: false,
    cor: colors.pink
  },
  {
    id: 6,
    nome: 'Roberto Souza',
    telefone: '(11) 96789-0123',
    email: 'robertosouza@example.com',
    editando: false,
    marcado: false,
    cor: colors.brown
  },
  {
    id: 7,
    nome: 'Isabela Pereira',
    telefone: '(21) 97890-1234',
    email: 'isabelapereira@example.com',
    editando: false,
    marcado: false,
    cor: colors.navy
  },
  {
    id: 8,
    nome: 'Ricardo Alves',
    telefone: '(31) 98901-2345',
    email: 'ricardoalves@example.com',
    editando: false,
    marcado: false,
    cor: colors.teal
  },
  {
    id: 9,
    nome: 'Amanda Ferreira',
    telefone: '(41) 90012-3456',
    email: 'amandaferreira@example.com',
    editando: false,
    marcado: false,
    cor: colors.maroon
  },
  {
    id: 10,
    nome: 'Gustavo Barbosa',
    telefone: '(51) 90123-4567',
    email: 'gustavobarbosa@example.com',
    editando: false,
    marcado: false,
    cor: colors.orange
  },
  {
    id: 11,
    nome: 'Sofia Oliveira',
    telefone: '(11) 91234-5678',
    email: 'sofiaoliveira@example.com',
    editando: false,
    marcado: false,
    cor: colors.pink
  },
  {
    id: 12,
    nome: 'Leonardo Silva',
    telefone: '(21) 92345-6789',
    email: 'leonardosilva@example.com',
    editando: false,
    marcado: false,
    cor: colors.gray
  },
  {
    id: 13,
    nome: 'Julia Castro',
    telefone: '(31) 93456-7890',
    email: 'juliacastro@example.com',
    editando: false,
    marcado: false,
    cor: colors.beige
  },
  {
    id: 14,
    nome: 'Fernando Almeida',
    telefone: '(41) 94567-8901',
    email: 'fernandoalmeida@example.com',
    editando: false,
    marcado: false,
    cor: colors.teal
  },
  {
    id: 15,
    nome: 'Gabriela Nunes',
    telefone: '(51) 95678-9012',
    email: 'gabrielanunes@example.com',
    editando: false,
    marcado: false,
    cor: colors.lightBlue
  },
  {
    id: 16,
    nome: 'Matheus Costa',
    telefone: '(11) 96789-0123',
    email: 'matheuscosta@example.com',
    editando: false,
    marcado: false,
    cor: colors.navy
  },
  {
    id: 17,
    nome: 'Thais Santos',
    telefone: '(21) 97890-1234',
    email: 'thaissantos@example.com',
    editando: false,
    marcado: false,
    cor: colors.yellow
  },
  {
    id: 18,
    nome: 'Rafaela Rodrigues',
    telefone: '(31) 98901-2345',
    email: 'rafaelarodrigues@example.com',
    editando: false,
    marcado: false,
    cor: colors.maroon
  },
  {
    id: 19,
    nome: 'Carlos Oliveira',
    telefone: '(41) 90012-3456',
    email: 'carlosoliveira@example.com',
    editando: false,
    marcado: false,
    cor: colors.brown
  },
  {
    id: 21,
    nome: 'Gabriel Ferreira',
    telefone: '(11) 91234-5678',
    email: 'gabrielferreira@example.com',
    editando: false,
    marcado: false,
    cor: colors.navy
  },
  {
    id: 22,
    nome: 'Laura Barbosa',
    telefone: '(21) 92345-6789',
    email: 'laurabarbosa@example.com',
    editando: false,
    marcado: false,
    cor: colors.lightBlue
  },
  {
    id: 23,
    nome: 'Victor Castro',
    telefone: '(31) 93456-7890',
    email: 'victorcastro@example.com',
    editando: false,
    marcado: false,
    cor: colors.gray
  },
  {
    id: 24,
    nome: 'Manuela Almeida',
    telefone: '(41) 94567-8901',
    email: 'manuelalmeida@example.com',
    editando: false,
    marcado: false,
    cor: colors.teal
  },
  {
    id: 25,
    nome: 'Lucas Silva',
    telefone: '(51) 95678-9012',
    email: 'lucassilva@example.com',
    editando: false,
    marcado: false,
    cor: colors.yellow
  },
  {
    id: 26,
    nome: 'Carla Nunes',
    telefone: '(11) 96789-0123',
    email: 'carlanunes@example.com',
    editando: false,
    marcado: false,
    cor: colors.maroon
  },
  {
    id: 28,
    nome: 'Amanda Rodrigues',
    telefone: '(31) 98901-2345',
    email: 'amandarodrigues@example.com',
    editando: false,
    marcado: false,
    cor: colors.brown
  },
  {
    id: 29,
    nome: 'João Oliveira',
    telefone: '(41) 90012-3456',
    email: 'joaooliveira@example.com',
    editando: false,
    marcado: false,
    cor: colors.navy
  },
  {
    id: 30,
    nome: 'Bianca Pereira',
    telefone: '(51) 90123-4567',
    email: 'biancapereira@example.com',
    editando: false,
    marcado: false,
    cor: colors.teal
  },
  {
    id: 31,
    nome: 'Rodolfo Ferreira',
    telefone: '(11) 91234-5678',
    email: 'rodolfoferreira@example.com',
    editando: false,
    marcado: false,
    cor: colors.gray
  },
  {
    id: 32,
    nome: 'Larissa Barbosa',
    telefone: '(21) 92345-6789',
    email: 'larissabarbosa@example.com',
    editando: false,
    marcado: false,
    cor: colors.lightBlue
  },
  {
    id: 33,
    nome: 'Luciana Castro',
    telefone: '(31) 93456-7890',
    email: 'lucianacastro@example.com',
    editando: false,
    marcado: false,
    cor: colors.pink
  },
  {
    id: 34,
    nome: 'Hugo Almeida',
    telefone: '(41) 94567-8901',
    email: 'hugoalmeida@example.com',
    editando: false,
    marcado: false,
    cor: colors.maroon
  },
  {
    id: 35,
    nome: 'Felipe Silva',
    telefone: '(51) 95678-9012',
    email: 'felipesilva@example.com',
    editando: false,
    marcado: false,
    cor: colors.teal
  },
  {
    id: 36,
    nome: 'Renata Nunes',
    telefone: '(11) 96789-0123',
    email: 'renatanunes@example.com',
    editando: false,
    marcado: false,
    cor: colors.black
  },
  {
    id: 37,
    nome: 'Gustavo Santos',
    telefone: '(21) 97890-1234',
    email: 'gustavosantos@example.com',
    editando: false,
    marcado: false,
    cor: colors.lightBlue
  },
  {
    id: 38,
    nome: 'Isabella Rodrigues',
    telefone: '(31) 98901-2345',
    email: 'isabellarodrigues@example.com',
    editando: false,
    marcado: false,
    cor: colors.beige
  },
  {
    id: 39,
    nome: 'Rafael Oliveira',
    telefone: '(41) 90012-3456',
    email: 'rafaeloliveira@example.com',
    editando: false,
    marcado: false,
    cor: colors.orange
  },
  {
    id: 40,
    nome: 'Aline Pereira',
    telefone: '(51) 90123-4567',
    email: 'alinepereira@example.com',
    editando: false,
    marcado: false,
    cor: colors.teal
  },
  {
    id: 41,
    nome: 'César Ferreira',
    telefone: '(11) 91234-5678',
    email: 'cesarferreira@example.com',
    editando: false,
    marcado: false,
    cor: colors.navy
  },
  {
    id: 42,
    nome: 'Carolina Barbosa',
    telefone: '(21) 92345-6789',
    email: 'carolinabarbosa@example.com',
    editando: false,
    marcado: false,
    cor: colors.lightBlue
  },
  {
    id: 43,
    nome: 'Henrique Castro',
    telefone: '(31) 93456-7890',
    email: 'henriquecastro@example.com',
    editando: false,
    marcado: false,
    cor: colors.yellow
  },
  {
    id: 44,
    nome: 'Julia Almeida',
    telefone: '(41) 94567-8901',
    email: 'juliaalmeida@example.com',
    editando: false,
    marcado: false,
    cor: colors.pink
  },
  {
    id: 45,
    nome: 'Giovanni Silva',
    telefone: '(51) 95678-9012',
    email: 'giovannisilva@example.com',
    editando: false,
    marcado: false,
    cor: colors.maroon
  },
  {
    id: 46,
    nome: 'Lucas Nunes',
    telefone: '(11) 96789-0123',
    email: 'lucasnunes@example.com',
    editando: false,
    marcado: false,
    cor: colors.brown
  },
  {
    id: 47,
    nome: 'Paulo Santos',
    telefone: '(21) 97890-1234',
    email: 'paulosantos@example.com',
    editando: false,
    marcado: false,
    cor: colors.teal
  },
  {
    id: 49,
    nome: 'Diego Oliveira',
    telefone: '(41) 90012-3456',
    email: 'diegooliveira@example.com',
    editando: false,
    marcado: false,
    cor: colors.navy
  },
  {
    id: 50,
    nome: 'Mariana Pereira',
    telefone: '(51) 90123-4567',
    email: 'marianapereira@example.com',
    editando: false,
    marcado: false,
    cor: colors.orange
  }
]

export const contacts = contatos.map((contato: Contact) => {
  return { ...contato, fav: false }
})

import { IUser } from "../interfaces/user/user.interface";

export const UsersList: IUser[] = [
  {
      nome: "João Silva",
      email: "joao.silva@example.com",
      senha: "senha-segura-123",
      idade: 30,
      endereco: {
          rua: "Rua das Flores",
          numero: 42,
          cidade: "São Paulo",
          estado: "SP",
          pais: "Brasil"
      },
      telefone: "11912345678",
      ativo: true,
      funcao: "Desenvolvedor",
      dataCadastro: "2023-08-01T09:00:00.000Z",
      status: {
          online: true,
          verificado: true,
          assinaturaAtiva: true,
          ultimoAcesso: "2023-08-02T09:00:00.000Z"
      }
  },
  {
      nome: "Maria Fernandes",
      email: "maria.fernandes@example.com",
      senha: "Maria123",
      idade: 25,
      endereco: {
          rua: "Avenida do Sol",
          numero: 100,
          cidade: "Rio de Janeiro",
          estado: "RJ",
          pais: "Brasil"
      },
      telefone: "21956789101",
      ativo: false,
      funcao: "Designer",
      dataCadastro: "2023-08-05T09:00:00.000Z",
      status: {
          online: false,
          verificado: false,
          assinaturaAtiva: false,
          ultimoAcesso: "2023-08-06T09:00:00.000Z"
      }
  },
  {
      nome: "Carlos Pereira",
      email: "carlos.pereira@example.com",
      senha: "Carlos456",
      idade: 40,
      endereco: {
          rua: "Praça da Liberdade",
          numero: 5,
          cidade: "Belo Horizonte",
          estado: "MG",
          pais: "Brasil"
      },
      telefone: "31911121314",
      ativo: true,
      funcao: "Gerente",
      dataCadastro: "2023-08-10T09:00:00.000Z",
      status: {
          online: false,
          verificado: true,
          assinaturaAtiva: false,
          ultimoAcesso: "2023-08-12T09:00:00.000Z"
      }
  },
  {
      nome: "Ana Sousa",
      email: "ana.sousa@example.com",
      senha: "Ana789",
      idade: 22,
      endereco: {
          rua: "Rua das Pedras",
          numero: 80,
          cidade: "Porto Alegre",
          estado: "RS",
          pais: "Brasil"
      },
      telefone: "51915161718",
      ativo: false,
      funcao: "Analista",
      dataCadastro: "2023-08-15T09:00:00.000Z",
      status: {
          online: true,
          verificado: false,
          assinaturaAtiva: true,
          ultimoAcesso: "2023-08-18T09:00:00.000Z"
      }
  },
  {
      nome: "Pedro Mendes",
      email: "pedro.mendes@example.com",
      senha: "Pedro012",
      idade: 35,
      endereco: {
          rua: "Boulevard Central",
          numero: 60,
          cidade: "Recife",
          estado: "PE",
          pais: "Brasil"
      },
      telefone: "81919202122",
      ativo: true,
      funcao: "Diretor",
      dataCadastro: "2023-08-20T09:00:00.000Z",
      status: {
          online: false,
          verificado: true,
          assinaturaAtiva: false,
          ultimoAcesso: "2023-08-25T09:00:00.000Z"
      }
  },
  {
    nome: "Jorbe Junior",
    email: "jorbe.junior@example.com",
    senha: "Jorbe03",
    idade: 25,
    endereco: {
        rua: "Fantasminha",
        numero: 14,
        cidade: "Rio",
        estado: "rj",
        pais: "Brasil"
    },
    telefone: "21698745210",
    ativo: true,
    funcao: "CEO",
    dataCadastro: "2023-08-25T09:00:00.000Z",
    status: {
        online: false,
        verificado: true,
        assinaturaAtiva: false,
        ultimoAcesso: "2023-08-25T09:00:00.000Z"
    }
  },
  {
    nome: "Camila Guimaraes",
    email: "camila.guimaraes@example.com",
    senha: "Camila06",
    idade: 35,
    endereco: {
        rua: "Deus perdeu a bota",
        numero: 96,
        cidade: "Rio",
        estado: "rj",
        pais: "Brasil"
    },
    telefone: "98978456231",
    ativo: true,
    funcao: "Dona",
    dataCadastro: "2023-09-25T09:00:00.000Z",
    status: {
        online: false,
        verificado: true,
        assinaturaAtiva: false,
        ultimoAcesso: "2023-09-25T09:00:00.000Z"
    }
  },
  {
    nome: "Jonatha Silva",
    email: "jonatha.silva@example.com",
    senha: "jon10",
    idade: 24,
    endereco: {
        rua: "Barreto",
        numero: 12,
        cidade: "Rio",
        estado: "rj",
        pais: "Brasil"
    },
    telefone: "98974631872",
    ativo: true,
    funcao: "Funcionario",
    dataCadastro: "2023-10-25T09:00:00.000Z",
    status: {
        online: false,
        verificado: true,
        assinaturaAtiva: false,
        ultimoAcesso: "2023-10-25T09:00:00.000Z"
    }
  },
  {
    nome: "Daniel Fernandes",
    email: "daniel.fernandas@example.com",
    senha: "dani12",
    idade: 22,
    endereco: {
        rua: "Lua",
        numero: 69,
        cidade: "Nave",
        estado: "rj",
        pais: "Brasil"
    },
    telefone: "21874563210",
    ativo: true,
    funcao: "Funcionario",
    dataCadastro: "2023-11-25T09:00:00.000Z",
    status: {
        online: false,
        verificado: true,
        assinaturaAtiva: false,
        ultimoAcesso: "2023-11-25T09:00:00.000Z"
    }
  },
  {
    nome: "Ingrid dos Santos",
    email: "ingrid.santos@example.com",
    senha: "Ingrid09",
    idade: 19,
    endereco: {
        rua: "lua",
        numero: 154,
        cidade: "Rio",
        estado: "rj",
        pais: "Brasil"
    },
    telefone: "21698745210",
    ativo: true,
    funcao: "Funcionario",
    dataCadastro: "2023-12-25T09:00:00.000Z",
    status: {
        online: false,
        verificado: true,
        assinaturaAtiva: false,
        ultimoAcesso: "2023-12-25T09:00:00.000Z"
    }
  },
  {
    nome: "Beatriz",
    email: "beatriz@example.com",
    senha: "bea098",
    idade: 20,
    endereco: {
        rua: "Fantasminha",
        numero: 23,
        cidade: "Rio",
        estado: "rj",
        pais: "Brasil"
    },
    telefone: "17852865598",
    ativo: true,
    funcao: "CEO",
    dataCadastro: "2024-02-23T09:00:00.000Z",
    status: {
        online: false,
        verificado: true,
        assinaturaAtiva: false,
        ultimoAcesso: "2023-08-23T09:00:00.000Z"
    }
  },
  {
    nome: "Michael",
    email: "michael@example.com",
    senha: "Michael30",
    idade: 28,
    endereco: {
        rua: "Flamengo",
        numero: 30,
        cidade: "Rio",
        estado: "rj",
        pais: "Brasil"
    },
    telefone: "98874532266",
    ativo: true,
    funcao: "Chefa",
    dataCadastro: "2024-08-26T09:00:00.000Z",
    status: {
        online: false,
        verificado: true,
        assinaturaAtiva: false,
        ultimoAcesso: "2023-08-25T09:00:00.000Z"
    }
  },
  {
    nome: "Bruno Henrique",
    email: "bruno@example.com",
    senha: "bruno27",
    idade: 32,
    endereco: {
        rua: "Flamengo",
        numero: 27,
        cidade: "Rio",
        estado: "rj",
        pais: "Brasil"
    },
    telefone: "32106589784",
    ativo: true,
    funcao: "Atacante",
    dataCadastro: "2024-01-25T09:00:00.000Z",
    status: {
        online: false,
        verificado: true,
        assinaturaAtiva: false,
        ultimoAcesso: "2023-08-25T09:00:00.000Z"
    }
  },
  {
    nome: "Juliana",
    email: "juliana@example.com",
    senha: "bruno27",
    idade: 20,
    endereco: {
        rua: "Crueldade",
        numero: 14,
        cidade: "Rio",
        estado: "rj",
        pais: "Brasil"
    },
    telefone: "21214598972",
    ativo: false,
    funcao: "Psicologa",
    dataCadastro: "2020-02-14T09:00:00.000Z",
    status: {
        online: false,
        verificado: true,
        assinaturaAtiva: false,
        ultimoAcesso: "2023-08-25T09:00:00.000Z"
    }
  }
];

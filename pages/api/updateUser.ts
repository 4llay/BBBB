// pages/api/updateUser.ts

import type { NextApiRequest, NextApiResponse } from 'next';

interface UpdateUserRequest {
  current: {
    id: number;
    // Adicione outros campos se necessário
  };
  newUserData: {
    name: string;
    email: string;
    image: string;
    // Adicione outros campos se necessário
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { current, newUserData }: UpdateUserRequest = req.body;

    // Implemente a lógica para atualizar o usuário no MongoDB usando Prisma
    // Certifique-se de validar e sanitizar os dados antes de atualizar o usuário

    // Exemplo: Supondo que você tenha um modelo chamado User no Prisma
    // const updatedUser = await prisma.user.update({
    //   where: { id: currentUser.id },
    //   data: newUserData,
    // });

    // Certifique-se de declarar updatedUser antes de usá-lo
    let updatedUser: any; // Declare o tipo real de acordo com seu modelo do Prisma

    // Preencha updatedUser com os dados reais obtidos após a atualização

    // Retorne os dados atualizados como resposta
    res.status(200).json({ message: 'Usuário atualizado com sucesso', user: updatedUser });
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}

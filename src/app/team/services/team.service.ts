import { Injectable } from '@angular/core';
import { teamMember } from '../models/teamMember.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  getTeam(): Array<teamMember> {
    return [
      {
        name: 'Alexandre',
        job: 'Responsable du développement Marketing et Commercial.',
        mail: 'Alex@boitapinte.fr',
        description: 
        ` Commercial aguérri et zythologue à ces heures perdu, Alexandre sera votre contact principal pour toutes vos questions. 
         Amical et entrepreneur il sera vous conseiller sur les meilleures solutions pour votre projet. Plus qu'un simple contact,
         il vous accompagnera durant l'ensemble du processus et fort probablement bien après.`,
      },
      {
        name: 'Damien',
        job: 'Ingénieur mécanique.',
        mail: '',
        description: 
        ` Ingénieur mécanique, professeur d'université et bricoleur passionné, damien est la pierre angulaire du projet. 
        Il est le concepteur et l'installateur du boitier connecté 'Boitapinte'.
        Son imagination sans limites lui permettront de mettre en place notre solution dans les situations les plus alambiquées et cela avec un minimum d'impact sur l'existant. `,
      },
      {
        name: 'Nicolas',
        job: 'Docteur en génie industriel.',
        mail: '',
        description: 
        `Doctorant en logistique, sa rigueur et son expérience en gestion de projet font de Nicolas un atout majeur pour l'équipe.
         Son esprit analytique et son sens de l'observation vous aidera à trouver les solutions les plus efficaces pour votre projet.
         Il sera sans aucun doute optimiser l'ensemble de vos processus logistiques.`
      },
      {
        name: 'William',
        job: 'Ingénieur informatique.',
        mail: '',
        description: 
        `Développeur Confirmé, fort de plus de 10 ans d’expérience, William est un ingénieur spécialisé dans le développement de logiciels.
         Passionné par les dernières technologies, il est à l\'aise dans le développement d\'applications web et mobiles. 
         Son rôle est aussi bien de concevoir l'architecture logiciel que de réaliser le developpement de l'application Boitapinte.`
      },
    ];

  }
}

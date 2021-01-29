# projet responsive

> Note et explication destinée à **M.LEHIANY**.

![](https://i.imgur.com/evUCU8T.png)

### Architecture et  composants.
- Backend
    - Réalisation d'un server en Nodejs permmettant d'assurrer la communication entre le navigateur (partie frontend) et l'API rezo dump mise à notre disposition par **M.Lafourcade**.
    - Un système de mise en cache pour améliorer les performances
- Fronend
    - Utilisation des "services" pour lier le fontend au backend
        - Data.service.ts
        ```js 
        loadData(word : string): Observable<IData> {
        return this.httpClient.get<IData>
        ('http://localhost:3000/getData/?word='+word,{
        })
          }
        ```
        - Une interface IData permettant de décrire le type de donnée attendu 
         ```js
         import { INodeCouple } from './INodeCouple'

        export interface IData {
            status : number ;
            defs : Array<string>;
            ramifications : Array<string>;
            relations_types : Array<string>;
            relation_node_couple: Array<INodeCouple> ;
        }
        ```

    - Composant :
        - home : composant principale contenant les aux composants 
        ```html
        <app-search></app-search>
        <app-footer></app-footer>
        ```
        - search: composant permettant de réaliser une recherche pour un mot donnée avec possibilité de choisir le type de relation. Il transmet ensuite les données décupérées depuis le serveur au composant data qui les affiche. 
        ```html
                <app-data 
                id="data" 
                [defs]="defs" 
                [ramifications]="ramifications" >
                </app-data>

        <div id="relation">
        <div  *ngIf="filter" class="container">
          <h1 class="title mb-3">Relations</h1>
          <div class="row" id="modals">
            <ng-container >
              <div class="col-md-2">
                <app-relation  [index]="getRelationTypeByIndex(relation)"
                [list]="filtered_data"></app-relation>

              </div>
            </ng-container>
          </div>

        </div> 
        </div> 
        <div  *ngIf="relation_node_couple.length > 0 
        && !filter " class="container">
          <h1 class="title mb-5">Relations</h1>
          <div class="row" id="modals">
            <ng-container *ngFor="let group of relation_node_couple;
            let indexOfelement=index;">
              <div class="col-md-4">
                <app-relation  [index]="getRelationTypeByIndex(indexOfelement)"
                [list]="group"></app-relation>

              </div>
            </ng-container>
          </div>

        </div> 
        ``` 
        - Data: composant permettant d’afficher les données transmise par le composant Search.
        - Footer: composant esthétique
        - NavBar: composant esthétique 


![](https://i.imgur.com/PNhhs26.png)
 ####  Architecture mise en place.
### Explication
 Lorsqu'un utilisateur fait une recherche à un instant t l'application commence par **vérifier si le mot existe dans le cache** du navigateur (ce cas correspond à une recherche déjà effectuée pour un même mot.). 
Si c'est le cas alors inutile de refaire une nouvelle recherche, on récupère donc les données directement dans le cache du navigateur.
Si au contraire, il s'agit qu'une nouvelle entrée (donc absente du cache) alors on **envoie une requête HTTP** au serveur. Ce dernier réagit alors en fonction de l'entrée récupérée. Toujours pour des raisons d'optimisation, il commence par **vérifier si les données pour cette entrée existent dans le cache**. Si c'est le cas alors il **renvoi les données sous forme JSON au client**. Au contraire, si le cache ne contient aucune donnée liée à cette entrée alors il **envoie une requete à l'API rezo-dump** pour récupérer les données. Il **enregistre cette nouvelle donnée dans le cache** avant de la **renvoyer au client.** Le client n'a plus qu'a **récupérer et afficher cette donnée.**

### Différentes diffultées rencontrées et solutions  adpotées pour les résoudre

- Probleme de parsing lié au données recoltées depuis rezo-dump
 Le premier problème que j'ai rencontré lors du déveleoppement de mon applicaion était lié à la récolte de données. En effet les données renvoyées par dezo-dump demande un traitement afin de pouvoir les utiliser. Parmis les diffèrents traitements on peut citer:
     - Filtrer les données pour garder que celles qui sont pertinentes
     - Utilisation des expression régulières pour recherche des ramifications
    - traduction des données en latin avant  de les transformer en utf8
- Affichage des données dans le front trop volumineux

    - utilisation du module ng-scroll dans angular permettant l'affichage des données page par page en fonction que l'utilisation scroll cette dernière.   
- Mise en relation des données
    - Utilisation de HashMap afin de déterminer les relations entre les diffèrent noeuds.

- Mise en place de l'au complémtion 
    - Utilisation du module DemoMaterialModule permettant de gérer l'auto complémtion. 


- Problème de parsing lié aux données récoltées depuis rezo-dump
Le premier problème que j'ai rencontré lors du développement de mon application était lié à la récolte de données. En effet les données renvoyées par dezo-dump demande un traitement afin de pouvoir les utiliser. Parmi les différents traitements on peut citer :
    - Filtrer les données pour garder que celles qui sont pertinentes
    - Utilisation des expressions régulières pour recherche des ramifications
    - traduction des données en latin avant de les transformer en utf8
- Affichage des données dans le front trop volumineux

    - utilisation du module ng-scroll dans angular permettant l'affichage des données page par page en fonction que l'utilisation scroll cette dernière. 
- Mise en relation des données
    - Utilisation de HashMap afin de déterminer les relations entre les diffèrent noeuds.

- Mise en place de l'auto-complétion 
    - Utilisation du module DemoMaterialModule permettant de gérer l'auto complétion. 



## Remerciements
Je tiens à remercier  M.Lafourcade, pour son accompagnement et ses conseils précieux au cours de ce projet qui m'ont permis de le porter à son état actuel.

##  Références
[Git Backend](https://github.com/ChoukriAbdellah/HMIN302-Projet-responsive/tree/main)
[Template utilisé ](https://demos.creative-tim.com/blk-design-system-angular/#/home)
[API rezo-dump](http://www.jeuxdemots.org/rezo-dump.php)

## Démo
![](https://i.imgur.com/NspSzkC.gif)


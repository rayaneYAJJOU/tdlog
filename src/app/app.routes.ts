import { Routes,RouterModule } from '@angular/router';
import { PannierComponent } from './pannier/pannier.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MesCommandeComponent } from './mes-commande/mes-commande.component';
import { AutoGuardService } from './auto-guard.service';
import { DetailProductComponent } from './detail-product/detail-product.component';


export const routes: Routes = [{ path: '', redirectTo: 'listProduct', pathMatch: 'full' },
    {path: "pannier",component : PannierComponent},
    {path : "listProduct",component: ListProductsComponent},
    {path:"detail",component:DetailProductComponent},
    {path:"connexion",component:ConnexionComponent},
    {path:"inscription",component:InscriptionComponent},
    {path:"mesCommande",component:MesCommandeComponent,canActivate:[AutoGuardService] }
    ];

<template>
    <div class="d-flex flex-row">
        <mdb-accordion class="accordeon" :panes="panes"/>
        <div class="description">
            <h3>DESCRIPTION</h3>
            <p v-html="article.description"></p>
            <ul>
                <li>N° de l'article : {{article.id}}</li>
                <li>Poids de l'article : {{article.weight}} Kg</li>
                <li>Slug de l'article : {{article.slug}}</li>
                <li v-for="materialOption in materialOptions" :key="materialOption.id">{{materialOption}}</li>
                <li v-for="stoneOption in stoneOptions" :key="stoneOption.id">{{stoneOption}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mdbAccordion} from 'mdbvue';

    export default {
        name: "AccordionInfo",
        props: ['article', 'materialOptions', 'stoneOptions'],
        components: {
            mdbAccordion,
        },
        data() {
            return {
                panes: [
                    {
                        title: 'LIVRAISON & RETOURS',
                        content: `Les commandes passées du lundi au vendredi avant 17h HEC seront traitées et envoyées le jour ouvrable suivant.
                                  Les commandes passées le week-end et les jours fériés seront traitées et envoyées deux jours ouvrables après.
                                  Aucune livraison n’est effectuée le week-end ou les jours fériés. <br><br>
                                  Délai de livraison standard : 3 à 5 jours ouvrables <br>
                                  Délai de livraison Express : 1 à 2 jours ouvrables <br><br>
                                  Malheureusement, pour l'instant, Swarovski n'est pas en mesure d’effectuer des livraisons vers les boîtes postales ou les adresses APO/FPO. <br>
                                  La priorité absolue de Swarovski est de satisfaire tous ses clients.
                                  Vous avez la possibilité de retourner les articles commandés et ainsi de vous rétracter du contrat de vente jusqu’à deux semaines
                                  après leur réception (à l’exception des cartes cadeaux et des produits personnalisés).`
                    }, {
                        title: 'ENTRETIEN & MAINTENANCE',
                        content: `Le cristal Swarovski est un matériau délicat qu’il convient de manipuler avec un soin particulier.
                                  Pour garantir que votre produit Swarovski reste en parfait état pendant longtemps et éviter tout dommage,
                                  veuillez observer les conseils d’entretien ci-dessous :
                                  <br><br>
                                  Bijoux et montres : <br>
                                  Conservez votre bijou dans l’emballage d’origine ou dans une pochette douce afin d’éviter les rayures.
                                  Évitez le contact avec l’eau Retirez le bijou avant de vous laver les mains, de nager et/ou d’appliquer des produits
                                  (par ex. parfum, spray pour cheveux, savon ou lotion) qui pourraient endommager les métaux et réduire la durée de vie du revêtement métallique,
                                  entraîner une décoloration et une perte de brillance du cristal.<br>
                                  Évitez le contact avec les objets durs (par ex. les chocs contre des objets) qui peuvent rayer ou ébrécher le cristal.<br><br>
                                  Figurines et articles de décoration :<br>
                                  Polissez soigneusement votre produit avec un linge doux qui ne peluche pas ou nettoyez-le à la main avec de l’eau tiède.
                                  Ne faites pas tremper dans l’eau vos produits en cristal. Essuyez avec un linge doux qui ne peluche pas pour une brillance maximale.<br>
                                  Évitez tout contact avec des matériaux agressifs ou abrasifs, et des produits nettoyants pour le verre ou les vitres.<br>
                                  Lorsque vous manipulez votre cristal, il est conseillé de porter des gants en coton afin d’éviter les traces de doigt.`
                    },
                    {
                        title: 'SERVICE DE PERSONNALISATION DES CADEAUX',
                        content: `Ajoutez gratuitement une note spéciale à votre cadeau en choisissant dans votre panier vos options préférées.<br><br>
                                  Ajoutez une élégante carte-cadeau contenant un message personnalisé (offre limitée à une carte de vœu par commande).<br><br>
                                  Pour la touche finale parfaite, ajoutez une luxueuse pochette cadeau Swarovski. Livraison à votre adresse : vous recevez une pochette cadeau pour
                                  chaque article commandé. La pochette cadeau est ajoutée séparément ; vous pouvez ainsi emballer le(s) cadeau(x) vous-même.<br>
                                  Livraison à une adresse différente : tous les articles sont joliment présentés dans une seule pochette cadeau.
                                  Le colis comprend un bon de livraison qui sert également de garantie, mais pas de facture.`
                    }
                ]
            };
        }
    }
</script>

<style>

    .accordeon {
        margin: 50px;
        font-family: Spartan;
        font-size: 25px;
        font-weight: 300;
        color: #000000;
        text-align: left;
        width: 60%;
    }

    .card {
        background-color: #ffffff !important;
        border: none !important;
        border-top: 1px solid #707070 !important;
    }

    .card-header {
        background-color: #ffffff !important;
        border: none !important;
        border-bottom: 1px solid #707070 !important;
    }

    .accordeon > div > div > h5::after {
        position: relative;
        top: 12px;
        content: '+';
        float: right;
        font-family: Spartan;
        font-size: 35px;
        font-weight: 500;
        color: #707070;
        line-height: 100%;
    }

    .accordeon > div > div > p {
        font-family: Spartan;
        font-size: 18px;
        font-weight: 300;
        color: #000000;
    }

    .description {
        width: 40%;
        text-align: left;
        margin: 50px 0px;
    }

</style>
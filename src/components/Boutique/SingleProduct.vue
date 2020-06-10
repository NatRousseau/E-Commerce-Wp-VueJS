<template>
    <div>
        <div class="category">
            <router-link class="is-tab nav-item" to="/boutique">BOUTIQUE</router-link>
            <router-link class="is-tab nav-item article_select" to="/boutique">{{article.name}}</router-link>
        </div>
        <div class="article_single">
            <div class="d-flex justify-content-center loader visibility-hidden" v-if="loader">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
            <div class="media-content d-flex">
                <ProductGalerie class="ProductGalerie" :galerieImg="galerieImg" @get-id="selectionImage"></ProductGalerie>
                <div class="article_img" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
                </div>
                <ProductDescription :article="article" :materialOptions="materialOptions"
                                    :stoneOptions="stoneOptions">
                </ProductDescription>
            </div>
            <div class="info_description d-flex flex-row">
                <AccordionInfo :article="article" :materialOptions="materialOptions" :stoneOptions="stoneOptions"
                               class="info_accordeon"></AccordionInfo>
            </div>
            <h4 class="related_txt">Les client ayant regardé {{article.name}} aiment aussi :</h4>
            <RelatedProduct :relateds="relateds" @get-id="changeProduct"></RelatedProduct>
        </div>

    </div>

</template>

<script>
    import ProductDescription from "./ProductDescription";
    import ProductGalerie from "./ProductGalerie";
    import AccordionInfo from "./AccordionInfo";
    import RelatedProduct from "./RelatedProduct";

    export default {
        name: "SingleProduct",
        components: {
            ProductDescription,
            ProductGalerie,
            AccordionInfo,
            RelatedProduct
        },
        data() {
            return {
                article: {},
                galerieImg: [],
                image: '',
                materialOptions: [],
                stoneOptions: [],
                relateds: [],
                loader: false,
            }
        },
        methods: {
            selectionImage(valeur) {
                this.image = valeur
            },

            changeProduct(id) {
                this.article = {}
                this.galerieImg = []
                this.image = ''
                this.materialOptions = []
                this.stoneOptions = []
                this.relateds = []
                this.$router.push('/boutique/' + id)
                this.loader = true;
                this.$woocommerce.get("products/" + id)
                    .then(response => {
                        this.article = response.data
                        let galeries = response.data.images
                        galeries.forEach(img => {
                            this.galerieImg.push(img)
                        })
                        this.image = response.data.images[0].src
                        this.atribute = response.data.attributes
                        let material = this.atribute[0].options
                        material.forEach(metaux => {
                            this.materialOptions.push(metaux);
                        })
                        let stone = this.atribute[1].options
                        stone.forEach(pierre => {
                            this.stoneOptions.push(pierre);
                        })
                        this.relatedid = response.data.related_ids
                        this.relatedid.forEach(id => {
                            this.$woocommerce.get("products/" + id)
                                .then(response => {
                                    this.relateds = [...this.relateds, response.data];
                                })
                                .catch((error) => {
                                    console.log(error.response.data);
                                });
                        })
                        this.loader = false;
                    }, error => {
                        alert(error)
                        this.loader = true;
                    });
            }
        },
        created() {
            this.loader = true;
            this.$woocommerce.get("products/" + this.$route.params.id)
                .then(response => {
                    this.article = response.data
                    let galeries = response.data.images
                    galeries.forEach(img => {
                        this.galerieImg.push(img)
                    })
                    this.image = response.data.images[0].src
                    this.atribute = response.data.attributes
                    let material = this.atribute[0].options
                    material.forEach(metaux => {
                        this.materialOptions.push(metaux);
                    })
                    let stone = this.atribute[1].options
                    stone.forEach(pierre => {
                        this.stoneOptions.push(pierre);
                    })
                    response.data.meta_data[0].value = 0
                    let test = response.data.meta_data[0].value
                    test += 1
                    test -= 1
                    response.data.meta_data[0].value = test
                    this.relatedid = response.data.related_ids
                    this.relatedid.forEach(id => {
                        this.$woocommerce.get("products/" + id)
                            .then(response => {
                                this.relateds = [...this.relateds, response.data];
                            })
                            .catch((error) => {
                                console.log(error.response.data);
                            });
                    })
                    this.loader = false;
                }, error => {
                    alert(error)
                    this.loader = true;
                });
        },
    }
</script>

<style scoped>

    .category {
        border-bottom: 2px solid #000000;
        border-top: 2px solid #000000;
        text-align: left;
    }

    .category > a {
        margin-top: 10px;
        margin-bottom: 5px;
        margin-left: 20px;
        margin-right: 10px;
        font-family: Spartan;
        font-size: 18px;
        font-weight: 300;
        color: #000000;
    }

    .article_select::before {
        content: '>';
        margin-right: 10px;
    }

    .article_select {
        text-transform: uppercase;
    }

    .loader {
        margin-top: 150px;
        margin-bottom: 150px;
    }

    .media-content{
        flex-direction: column;
    }

    .ProductGalerie{
        position: relative;
        top: 300px;
        display: flex;
        flex-wrap: wrap;
    }

    .article_single {
        margin-top: 40px;
    }

    .article_img {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 70%;
        height: 300px;
        margin-right: 60px;
        margin-left: 60px;
        margin-top: -140px;
        background-color: #FAFAFA;
    }

    .article_img img {
        width: 100%;
    }

    .info_accordeon {
        width: 100%;
    }

    .related_txt {
        text-transform: uppercase;
        font-size: 16px;
    }

    @media (min-width: 576px) {
        .article_img {
            width: 70%;
            height: 300px;
            margin-right: 90px;
            margin-left: 90px;
            margin-top: -80px;
            background-color: #FAFAFA;
        }

        .ProductGalerie{
            margin-left: 80px;
        }
    }

    @media (min-width: 768px) {
        .article_img {
            width: 40%;
            height: 300px;
            margin-right: 230px;
            margin-left: 230px;
            margin-top: -80px;
            background-color: #FAFAFA;
        }

        .ProductGalerie{
            margin-left: 188px;
        }
    }

    @media (min-width: 992px) {
        .media-content{
            flex-direction: row;
        }

        .ProductGalerie{
            position: initial;
            flex-direction: column;
            flex-wrap: wrap;
            margin-left: 60px;
        }

        .article_img {
            width: 100%;
            height: 400px;
            margin-right: 80px;
            margin-left: 80px;
            margin-top: 0px;
            background-color: #FAFAFA;
        }

    }

    @media (min-width: 1200px) {
        .category {
            margin-top: 100px;
        }

    }

    @media (min-width: 1600px) {

        .category {
            margin-top: 110px;
        }
        .article_img {
            width: 600px;
            height: 400px;
            margin-right: 300px;
            margin-left: 300px;
            margin-top: 0px;
            background-color: #FAFAFA;
        }

    }

</style>
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import unmarshall from '../utils/unmarshall';
import SpeciesItem from './SpeciesItem';
import './SpeciesCont.scss'

const testData = [
    {
        "info": {
            "M": {
                "nombre_ingles": {
                    "S": "Hylidae"
                },
                "familia": {
                    "S": "Anura"
                },
                "orden": {
                    "S": "Amphibia"
                },
                "clase": {
                    "S": "Chordata"
                },
                "filo": {
                    "S": "Animalia"
                },
                "registers": {
                    "M": {
                        "0": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2021/09/29/463994/m_20210127_220150.jpg"
                                },
                                "zona": {
                                    "S": "Villa Zorraquin"
                                },
                                "ciudad": {
                                    "S": "Concordia"
                                },
                                "autor": {
                                    "S": "Pablo Bruni"
                                }
                            }
                        },
                        "1": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2021/02/07/432518/m_Scinax-nasicus--27-jul-2017--Gualeguay--2-.JPG"
                                },
                                "ciudad": {
                                    "S": "Gualeguay"
                                },
                                "autor": {
                                    "S": "Nicolas Chimento"
                                }
                            }
                        },
                        "2": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/11/17/419401/m_IMG_20201028_232125_159.jpg"
                                },
                                "ciudad": {
                                    "S": "Bovril"
                                },
                                "autor": {
                                    "S": "Adrián Tomé"
                                }
                            }
                        },
                        "3": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/02/03/379352/m_Scinus-sp.jpg"
                                },
                                "zona": {
                                    "S": "Camino de la Costa"
                                },
                                "ciudad": {
                                    "S": "Gualeguaychú"
                                },
                                "autor": {
                                    "S": "Gustavo Puente"
                                }
                            }
                        },
                        "4": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/01/28/378146/m_large--7-.jpg"
                                },
                                "zona": {
                                    "S": "Campo Dri"
                                },
                                "ciudad": {
                                    "S": "Concordia"
                                },
                                "autor": {
                                    "S": "Maria Belén Dri"
                                }
                            }
                        },
                        "5": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/01/28/378138/m_large--1-.jpg"
                                },
                                "zona": {
                                    "S": "Campo Dri"
                                },
                                "ciudad": {
                                    "S": "Concordia"
                                },
                                "autor": {
                                    "S": "Maria Belén Dri"
                                }
                            }
                        },
                        "6": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/play.bmp"
                                },
                                "zona": {
                                    "S": "Costa del lago Salto Grande en campos de Lover y Capeletti (-30.86352 -57.8193)"
                                },
                                "ciudad": {
                                    "S": "Colonia \"la Matilde\" (departamento Federación)"
                                },
                                "autor": {
                                    "S": "Carlos M. Grassini"
                                }
                            }
                        }
                    }
                }
            }
        },
        "url": {
            "S": "https://www.ecoregistros.org/ficha/Scinax-nasicus"
        },
        "nombre_comun": {
            "S": "Ranita Hocicuda de Pecho Manchado"
        },
        "scientific_name": {
            "S": "Scinax nasicus"
        }
    },
    {
        "info": {
            "M": {
                "familia": {
                    "S": "Anura"
                },
                "orden": {
                    "S": "Amphibia"
                },
                "clase": {
                    "S": "Chordata"
                },
                "filo": {
                    "S": "Animalia"
                },
                "registers": {
                    "M": {
                        "0": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2021/05/24/446005/m_sapo.jpg"
                                },
                                "ciudad": {
                                    "S": "Parque Nacional El Palmar"
                                },
                                "autor": {
                                    "S": "Lucas De Ciria"
                                }
                            }
                        },
                        "1": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2021/02/02/431922/m_rhinella-d.jpg"
                                },
                                "zona": {
                                    "S": "Zona urbana"
                                },
                                "ciudad": {
                                    "S": "Paraná"
                                },
                                "autor": {
                                    "S": "Néstor Trossero"
                                }
                            }
                        },
                        "2": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2021/01/25/430898/m_rhynel-dypticha-20-2nero-toma-vieja.jpg"
                                },
                                "zona": {
                                    "S": "Zona urbana"
                                },
                                "ciudad": {
                                    "S": "Paraná"
                                },
                                "autor": {
                                    "S": "Néstor Trossero"
                                }
                            }
                        },
                        "3": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/11/22/420185/m_rhinella-d.jpg"
                                },
                                "zona": {
                                    "S": "Costa del río Paraná"
                                },
                                "ciudad": {
                                    "S": "Paraná"
                                },
                                "autor": {
                                    "S": "Néstor Trossero"
                                }
                            }
                        },
                        "4": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/06/10/400452/m__DSC1386eco.jpg"
                                },
                                "ciudad": {
                                    "S": "Paraje La Jaula, Diamante"
                                },
                                "autor": {
                                    "S": "Andres Bianchi"
                                }
                            }
                        },
                        "5": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/03/19/390180/m_DSC_0104-sapo-cururu-Ubajay-w.jpg"
                                },
                                "ciudad": {
                                    "S": "Ubajay"
                                },
                                "autor": {
                                    "S": "Manuel Godoy"
                                }
                            }
                        }
                    }
                }
            }
        },
        "url": {
            "S": "https://www.ecoregistros.org/ficha/Rhinella-diptycha"
        },
        "nombre_comun": {
            "S": ""
        },
        "scientific_name": {
            "S": "Rhinella diptycha"
        }
    },
    {
        "info": {
            "M": {
                "nombre_ingles": {
                    "S": "Hylidae"
                },
                "familia": {
                    "S": "Anura"
                },
                "orden": {
                    "S": "Amphibia"
                },
                "clase": {
                    "S": "Chordata"
                },
                "filo": {
                    "S": "Animalia"
                },
                "registers": {
                    "M": {
                        "0": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2019/04/26/329568/m_IMG_4600.JPG"
                                },
                                "ciudad": {
                                    "S": "Sur de Entre Ríos (lugar reservado)"
                                },
                                "autor": {
                                    "S": "Marcos Augusto Lartigau"
                                }
                            }
                        },
                        "1": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2019/04/12/327005/m_rana.jpg"
                                },
                                "zona": {
                                    "S": "Zona urbana"
                                },
                                "ciudad": {
                                    "S": "Paraná"
                                },
                                "autor": {
                                    "S": "Néstor Trossero"
                                }
                            }
                        }
                    }
                }
            }
        },
        "url": {
            "S": "https://www.ecoregistros.org/ficha/Lysapsus-limellum"
        },
        "nombre_comun": {
            "S": "Ranita Boyadora Enana"
        },
        "scientific_name": {
            "S": "Lysapsus limellum"
        }
    },
    {
        "info": {
            "M": {
                "familia": {
                    "S": "Anura"
                },
                "orden": {
                    "S": "Amphibia"
                },
                "clase": {
                    "S": "Chordata"
                },
                "filo": {
                    "S": "Animalia"
                },
                "registers": {
                    "M": {
                        "0": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2019/12/11/367576/m_Untitled.jpgRANAS.jpg"
                                },
                                "zona": {
                                    "S": "El Potrero"
                                },
                                "ciudad": {
                                    "S": "Costa Uruguay Norte"
                                },
                                "autor": {
                                    "S": "Rodolfo Julio Velazquez"
                                }
                            }
                        },
                        "1": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2019/05/05/330665/m_SUBIDA-Untitled.jpg-AMARRAS-Rana-criolla.jpg2.jpg3.jpg"
                                },
                                "zona": {
                                    "S": "Amarras del Gualeguaychú (área natural protegida privada)"
                                },
                                "ciudad": {
                                    "S": "Departamento Gualeguaychú"
                                },
                                "autor": {
                                    "S": "Rodolfo Julio Velazquez"
                                }
                            }
                        },
                        "2": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2019/05/05/330664/m_Untitled.jpg-AMARRAS-Rana-criolla.jpg2.jpg"
                                },
                                "zona": {
                                    "S": "Amarras del Gualeguaychú (área natural protegida privada)"
                                },
                                "ciudad": {
                                    "S": "Departamento Gualeguaychú"
                                },
                                "autor": {
                                    "S": "Rodolfo Julio Velazquez"
                                }
                            }
                        },
                        "3": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2019/05/05/330663/m_Untitled.jpg-AMARRAS-Rana-criolla.jpg"
                                },
                                "zona": {
                                    "S": "Amarras del Gualeguaychú (área natural protegida privada)"
                                },
                                "ciudad": {
                                    "S": "Departamento Gualeguaychú"
                                },
                                "autor": {
                                    "S": "Rodolfo Julio Velazquez"
                                }
                            }
                        },
                        "4": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2018/10/27/294506/m_Untitled.jpg-rana-criolla.jpg-humedal.jpg"
                                },
                                "zona": {
                                    "S": "Humedales de La Península"
                                },
                                "ciudad": {
                                    "S": "Departamento Gualeguaychú"
                                },
                                "autor": {
                                    "S": "Rodolfo Julio Velazquez"
                                }
                            }
                        },
                        "5": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2018/10/18/292595/m_DSCN7021_917x688.jpg"
                                },
                                "ciudad": {
                                    "S": "Rp Nº2 entre Los Conquistadores y San José de Feliciano"
                                },
                                "autor": {
                                    "S": "Walter Bustamante"
                                }
                            }
                        },
                        "6": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2018/05/24/265797/m_Untitled.jpg-rana-criolla.jpg"
                                },
                                "zona": {
                                    "S": "Sarandí"
                                },
                                "ciudad": {
                                    "S": "Departamento Gualeguaychú"
                                },
                                "autor": {
                                    "S": "Rodolfo Julio Velazquez"
                                }
                            }
                        }
                    }
                }
            }
        },
        "url": {
            "S": "https://www.ecoregistros.org/ficha/Leptodactylus-macrosternum"
        },
        "nombre_comun": {
            "S": "Rana Criolla Chaqueña"
        },
        "scientific_name": {
            "S": "Leptodactylus macrosternum"
        }
    },
    {
        "info": {
            "M": {
                "familia": {
                    "S": "Anura"
                },
                "orden": {
                    "S": "Amphibia"
                },
                "clase": {
                    "S": "Chordata"
                },
                "filo": {
                    "S": "Animalia"
                },
                "registers": {
                    "M": {
                        "0": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2019/05/31/335033/m_Untitled.jpg-amarras-sapo-jardin.jpg2.jpg"
                                },
                                "zona": {
                                    "S": "Amarras del Gualeguaychú (área natural protegida privada)"
                                },
                                "ciudad": {
                                    "S": "Departamento Gualeguaychú"
                                },
                                "autor": {
                                    "S": "Rodolfo Julio Velazquez"
                                }
                            }
                        }
                    }
                }
            }
        },
        "url": {
            "S": "https://www.ecoregistros.org/ficha/Rhinella-major"
        },
        "nombre_comun": {
            "S": "Sapo Chaqueño"
        },
        "scientific_name": {
            "S": "Rhinella major"
        }
    },
    {
        "info": {
            "M": {
                "nombre_ingles": {
                    "S": "Hylidae"
                },
                "familia": {
                    "S": "Anura"
                },
                "orden": {
                    "S": "Amphibia"
                },
                "clase": {
                    "S": "Chordata"
                },
                "filo": {
                    "S": "Animalia"
                },
                "registers": {
                    "M": {
                        "0": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2019/03/04/319762/m_RANA-NADADORA.jpg"
                                },
                                "ciudad": {
                                    "S": "Reserva Privada Senderos del Monte"
                                },
                                "autor": {
                                    "S": "Gustavo Puente"
                                }
                            }
                        }
                    }
                }
            }
        },
        "url": {
            "S": "https://www.ecoregistros.org/ficha/Pseudis-platensis"
        },
        "nombre_comun": {
            "S": "Rana Boyadora Grande"
        },
        "scientific_name": {
            "S": "Pseudis platensis"
        }
    },
    {
        "info": {
            "M": {
                "nombre_ingles": {
                    "S": "Bufonidae"
                },
                "familia": {
                    "S": "Anura"
                },
                "orden": {
                    "S": "Amphibia"
                },
                "clase": {
                    "S": "Chordata"
                },
                "filo": {
                    "S": "Animalia"
                },
                "registers": {
                    "M": {
                        "0": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2019/11/13/361988/m_IMG_8622.JPG"
                                },
                                "zona": {
                                    "S": "Campo Dri"
                                },
                                "ciudad": {
                                    "S": "Concordia"
                                },
                                "autor": {
                                    "S": "Diego Carus"
                                }
                            }
                        }
                    }
                }
            }
        },
        "url": {
            "S": "https://www.ecoregistros.org/ficha/Rhinella-bergi"
        },
        "nombre_comun": {
            "S": "Sapito de Jardín de Berg"
        },
        "scientific_name": {
            "S": "Rhinella bergi"
        }
    },
    {
        "info": {
            "M": {
                "nombre_ingles": {
                    "S": "Hylidae"
                },
                "familia": {
                    "S": "Anura"
                },
                "orden": {
                    "S": "Amphibia"
                },
                "clase": {
                    "S": "Chordata"
                },
                "filo": {
                    "S": "Animalia"
                },
                "registers": {
                    "M": {
                        "0": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/02/07/380374/m__DSC8156.jpg"
                                },
                                "ciudad": {
                                    "S": "Área Natural Protegida Don Sebastián"
                                },
                                "autor": {
                                    "S": "Luis Prevedel"
                                }
                            }
                        }
                    }
                }
            }
        },
        "url": {
            "S": "https://www.ecoregistros.org/ficha/Scinax-acuminatus"
        },
        "nombre_comun": {
            "S": "Ranita Hocicuda Chaqueña"
        },
        "scientific_name": {
            "S": "Scinax acuminatus"
        }
    },
    {
        "info": {
            "M": {
                "familia": {
                    "S": "Anura"
                },
                "orden": {
                    "S": "Amphibia"
                },
                "clase": {
                    "S": "Chordata"
                },
                "filo": {
                    "S": "Animalia"
                },
                "registers": {
                    "M": {
                        "0": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/05/03/396829/m_Untitled.jpg-rana2.jpg"
                                },
                                "zona": {
                                    "S": "Amarras del Gualeguaychú (área natural protegida privada)"
                                },
                                "ciudad": {
                                    "S": "Departamento Gualeguaychú"
                                },
                                "autor": {
                                    "S": "Rodolfo Julio Velazquez"
                                }
                            }
                        },
                        "1": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/05/03/396828/m_Untitled.jpg-rana.jpg"
                                },
                                "zona": {
                                    "S": "Amarras del Gualeguaychú (área natural protegida privada)"
                                },
                                "ciudad": {
                                    "S": "Departamento Gualeguaychú"
                                },
                                "autor": {
                                    "S": "Rodolfo Julio Velazquez"
                                }
                            }
                        },
                        "2": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2019/05/31/335029/m_Untitled.jpg-amarras-rana-sp.jpg"
                                },
                                "zona": {
                                    "S": "Amarras del Gualeguaychú (área natural protegida privada)"
                                },
                                "ciudad": {
                                    "S": "Departamento Gualeguaychú"
                                },
                                "autor": {
                                    "S": "Rodolfo Julio Velazquez"
                                }
                            }
                        },
                        "3": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2019/05/31/335028/m_Untitled.jpg-amarras-rana-sp.2.jpg"
                                },
                                "zona": {
                                    "S": "Amarras del Gualeguaychú (área natural protegida privada)"
                                },
                                "ciudad": {
                                    "S": "Departamento Gualeguaychú"
                                },
                                "autor": {
                                    "S": "Rodolfo Julio Velazquez"
                                }
                            }
                        },
                        "4": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/play.bmp"
                                },
                                "zona": {
                                    "S": "Complejo \"el Lago\", entre Udine y ruta nacional 14"
                                },
                                "ciudad": {
                                    "S": "Chajarí"
                                },
                                "autor": {
                                    "S": "Carlos M. Grassini"
                                }
                            }
                        }
                    }
                }
            }
        },
        "url": {
            "S": "https://www.ecoregistros.org/ficha/Leptodactylus-latinasus"
        },
        "nombre_comun": {
            "S": "Rana Piadora"
        },
        "scientific_name": {
            "S": "Leptodactylus latinasus"
        }
    },
    {
        "info": {
            "M": {
                "familia": {
                    "S": "Anura"
                },
                "orden": {
                    "S": "Amphibia"
                },
                "clase": {
                    "S": "Chordata"
                },
                "filo": {
                    "S": "Animalia"
                },
                "registers": {
                    "M": {
                        "0": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/play.bmp"
                                },
                                "zona": {
                                    "S": "Ruta provincial Nº 1 y Paraje \"las 14\""
                                },
                                "ciudad": {
                                    "S": "Chajarí"
                                },
                                "autor": {
                                    "S": "Carlos M. Grassini"
                                }
                            }
                        }
                    }
                }
            }
        },
        "url": {
            "S": "https://www.ecoregistros.org/ficha/Physalaemus-gracilis"
        },
        "nombre_comun": {
            "S": "Ranita Gato"
        },
        "scientific_name": {
            "S": "Physalaemus gracilis"
        }
    },
    {
        "info": {
            "M": {
                "familia": {
                    "S": "Anura"
                },
                "orden": {
                    "S": "Amphibia"
                },
                "clase": {
                    "S": "Chordata"
                },
                "filo": {
                    "S": "Animalia"
                },
                "registers": {
                    "M": {
                        "0": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2021/02/16/433397/m_GEDC7629.JPG"
                                },
                                "zona": {
                                    "S": "Camping La Ensenada"
                                },
                                "ciudad": {
                                    "S": "Diamante"
                                },
                                "autor": {
                                    "S": "Sergio Gabriel Borrillo"
                                }
                            }
                        },
                        "1": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/02/05/379843/m_RANA.jpg"
                                },
                                "zona": {
                                    "S": "Islas de Victoria Entre Rios."
                                },
                                "ciudad": {
                                    "S": "Humedales del Rio Parana"
                                },
                                "autor": {
                                    "S": "Pablo Cantador"
                                }
                            }
                        }
                    }
                }
            }
        },
        "url": {
            "S": "https://www.ecoregistros.org/ficha/Trachycephalus-typhonius"
        },
        "nombre_comun": {
            "S": "Rana Lechosa"
        },
        "scientific_name": {
            "S": "Trachycephalus typhonius"
        }
    },
    {
        "info": {
            "M": {
                "familia": {
                    "S": "Anura"
                },
                "orden": {
                    "S": "Amphibia"
                },
                "clase": {
                    "S": "Chordata"
                },
                "filo": {
                    "S": "Animalia"
                },
                "registers": {
                    "M": {
                        "0": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/02/07/380378/m__DSC8161.jpg"
                                },
                                "ciudad": {
                                    "S": "Área Natural Protegida Don Sebastián"
                                },
                                "autor": {
                                    "S": "Luis Prevedel"
                                }
                            }
                        },
                        "1": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2019/11/15/362233/m_Dendropsophus-sanborni---2-.jpg"
                                },
                                "zona": {
                                    "S": "Inta Estación Experimental"
                                },
                                "ciudad": {
                                    "S": "Concordia"
                                },
                                "autor": {
                                    "S": "Eduardo Beltrocco"
                                }
                            }
                        },
                        "2": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2019/08/08/345107/m_53932202_10155752809315566_27630194630066176_o.jpg"
                                },
                                "ciudad": {
                                    "S": "Departamento Diamante"
                                },
                                "autor": {
                                    "S": "Alan Feyt"
                                }
                            }
                        },
                        "3": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/albumes/101/29381/m_P1130187-Dendropsophus-sanborni-grabada-Lag-Polioptyla-17112013-EcoRegistros.jpg"
                                },
                                "zona": {
                                    "S": "Calle Guatemala, continuación, entre ruta \"tres Hermanas\" y límite del ejido Chajarí"
                                },
                                "ciudad": {
                                    "S": "Chajarí"
                                },
                                "autor": {
                                    "S": "Carlos M. Grassini"
                                }
                            }
                        }
                    }
                }
            }
        },
        "url": {
            "S": "https://www.ecoregistros.org/ficha/Dendropsophus-sanborni"
        },
        "nombre_comun": {
            "S": "Ranita Trepadora Enana"
        },
        "scientific_name": {
            "S": "Dendropsophus sanborni"
        }
    },
    {
        "info": {
            "M": {
                "familia": {
                    "S": "Anura"
                },
                "orden": {
                    "S": "Amphibia"
                },
                "clase": {
                    "S": "Chordata"
                },
                "filo": {
                    "S": "Animalia"
                },
                "registers": {
                    "M": {
                        "0": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/10/03/413329/m_rhinella-s.jpg"
                                },
                                "zona": {
                                    "S": "Zona urbana"
                                },
                                "ciudad": {
                                    "S": "Paraná"
                                },
                                "autor": {
                                    "S": "Néstor Trossero"
                                }
                            }
                        }
                    }
                }
            }
        },
        "url": {
            "S": "https://www.ecoregistros.org/ficha/Rhinella-sp."
        },
        "nombre_comun": {
            "S": ""
        },
        "scientific_name": {
            "S": "Rhinella sp."
        }
    },
    {
        "info": {
            "M": {
                "familia": {
                    "S": "Anura"
                },
                "orden": {
                    "S": "Amphibia"
                },
                "clase": {
                    "S": "Chordata"
                },
                "filo": {
                    "S": "Animalia"
                },
                "registers": {
                    "M": {
                        "0": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/02/07/380429/m__DSC8200.jpg"
                                },
                                "ciudad": {
                                    "S": "Área Natural Protegida Don Sebastián"
                                },
                                "autor": {
                                    "S": "Luis Prevedel"
                                }
                            }
                        },
                        "1": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/02/07/380359/m__DSC8142.jpg"
                                },
                                "ciudad": {
                                    "S": "Área Natural Protegida Don Sebastián"
                                },
                                "autor": {
                                    "S": "Luis Prevedel"
                                }
                            }
                        },
                        "2": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2019/12/08/366870/m_rana-P.jpg"
                                },
                                "ciudad": {
                                    "S": "Humedales del Rio Parana"
                                },
                                "autor": {
                                    "S": "Pablo Cantador"
                                }
                            }
                        }
                    }
                }
            }
        },
        "url": {
            "S": "https://www.ecoregistros.org/ficha/Elachistocleis-bicolor"
        },
        "nombre_comun": {
            "S": "Rana Pingüino"
        },
        "scientific_name": {
            "S": "Elachistocleis bicolor"
        }
    },
    {
        "info": {
            "M": {
                "familia": {
                    "S": "Anura"
                },
                "orden": {
                    "S": "Amphibia"
                },
                "clase": {
                    "S": "Chordata"
                },
                "filo": {
                    "S": "Animalia"
                },
                "registers": {
                    "M": {}
                }
            }
        },
        "url": {
            "S": "https://www.ecoregistros.org/ficha/Scinax-berthae"
        },
        "nombre_comun": {
            "S": "Ranita de Pintas Naranjas"
        },
        "scientific_name": {
            "S": "Scinax berthae"
        }
    },
    {
        "info": {
            "M": {
                "familia": {
                    "S": "Anura"
                },
                "orden": {
                    "S": "Amphibia"
                },
                "clase": {
                    "S": "Chordata"
                },
                "filo": {
                    "S": "Animalia"
                },
                "registers": {
                    "M": {
                        "0": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/albumes/101/26694/m_P1110359-Pseudopaludicola-Chajari-19092013-EcoRegistros.jpg"
                                },
                                "zona": {
                                    "S": "Laguna \"la Herminda\", Calle Brugherio entre Siburu y Belgrano"
                                },
                                "ciudad": {
                                    "S": "Chajarí"
                                },
                                "autor": {
                                    "S": "Carlos M. Grassini"
                                }
                            }
                        },
                        "1": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/albumes/310/22265/m_DSC00991.JPG"
                                },
                                "ciudad": {
                                    "S": "Refugio de Vida Silvestre - La Aurora del Palmar"
                                },
                                "autor": {
                                    "S": "Walter Prado"
                                }
                            }
                        },
                        "2": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/play.bmp"
                                },
                                "zona": {
                                    "S": "Calle Uruguay y calle Artigas, charcos al oeste del arroyo Chajarí"
                                },
                                "ciudad": {
                                    "S": "Chajarí"
                                },
                                "autor": {
                                    "S": "Carlos M. Grassini"
                                }
                            }
                        }
                    }
                }
            }
        },
        "url": {
            "S": "https://www.ecoregistros.org/ficha/Pseudopaludicola-falcipes"
        },
        "nombre_comun": {
            "S": "Ranita Enana Común"
        },
        "scientific_name": {
            "S": "Pseudopaludicola falcipes"
        }
    },
    {
        "info": {
            "M": {
                "nombre_ingles": {
                    "S": "Hylidae"
                },
                "familia": {
                    "S": "Anura"
                },
                "orden": {
                    "S": "Amphibia"
                },
                "clase": {
                    "S": "Chordata"
                },
                "filo": {
                    "S": "Animalia"
                },
                "registers": {
                    "M": {
                        "0": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/02/07/380431/m__DSC8222.jpg"
                                },
                                "ciudad": {
                                    "S": "Área Natural Protegida Don Sebastián"
                                },
                                "autor": {
                                    "S": "Luis Prevedel"
                                }
                            }
                        },
                        "1": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/01/11/373351/m_predelta63--1-de-1-.jpg"
                                },
                                "zona": {
                                    "S": "Curiyu"
                                },
                                "ciudad": {
                                    "S": "Parque Nacional Pre-Delta"
                                },
                                "autor": {
                                    "S": "Pedro Garabaya"
                                }
                            }
                        }
                    }
                }
            }
        },
        "url": {
            "S": "https://www.ecoregistros.org/ficha/Boana-raniceps"
        },
        "nombre_comun": {
            "S": "Rana Trepadora Chaqueña"
        },
        "scientific_name": {
            "S": "Boana raniceps"
        }
    },
    {
        "info": {
            "M": {
                "nombre_ingles": {
                    "S": "Bufonidae"
                },
                "familia": {
                    "S": "Anura"
                },
                "orden": {
                    "S": "Amphibia"
                },
                "clase": {
                    "S": "Chordata"
                },
                "filo": {
                    "S": "Animalia"
                },
                "registers": {
                    "M": {
                        "0": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/albumes/101/22134/m_P1080329-Melanophryniscus-atroluteus-Chajari-02052013-EcoRegistros.jpg"
                                },
                                "zona": {
                                    "S": "Calle Uruguay y calle Artigas, charcos al oeste del arroyo Chajarí"
                                },
                                "ciudad": {
                                    "S": "Chajarí"
                                },
                                "autor": {
                                    "S": "Carlos M. Grassini"
                                }
                            }
                        },
                        "1": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/play.bmp"
                                },
                                "zona": {
                                    "S": "Calle Uruguay y calle Artigas, charcos al oeste del arroyo Chajarí"
                                },
                                "ciudad": {
                                    "S": "Chajarí"
                                },
                                "autor": {
                                    "S": "Carlos M. Grassini"
                                }
                            }
                        },
                        "2": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/play.bmp"
                                },
                                "zona": {
                                    "S": "Calle Uruguay y calle Artigas, charcos al oeste del arroyo Chajarí"
                                },
                                "ciudad": {
                                    "S": "Chajarí"
                                },
                                "autor": {
                                    "S": "Carlos M. Grassini"
                                }
                            }
                        }
                    }
                }
            }
        },
        "url": {
            "S": "https://www.ecoregistros.org/ficha/Melanophryniscus-atroluteus"
        },
        "nombre_comun": {
            "S": "Sapito de Vientre Rojo"
        },
        "scientific_name": {
            "S": "Melanophryniscus atroluteus"
        }
    },
    {
        "info": {
            "M": {
                "nombre_ingles": {
                    "S": "Hylidae"
                },
                "familia": {
                    "S": "Anura"
                },
                "orden": {
                    "S": "Amphibia"
                },
                "clase": {
                    "S": "Chordata"
                },
                "filo": {
                    "S": "Animalia"
                },
                "registers": {
                    "M": {
                        "0": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/02/07/380369/m__DSC8147.jpg"
                                },
                                "ciudad": {
                                    "S": "Área Natural Protegida Don Sebastián"
                                },
                                "autor": {
                                    "S": "Luis Prevedel"
                                }
                            }
                        },
                        "1": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/01/28/378130/m_IMG_3256.JPG"
                                },
                                "zona": {
                                    "S": "Campo Dri"
                                },
                                "ciudad": {
                                    "S": "Concordia"
                                },
                                "autor": {
                                    "S": "Diego Carus"
                                }
                            }
                        },
                        "2": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/play.bmp"
                                },
                                "zona": {
                                    "S": "Calle Inmigrantes Percara entre 25 de Mayo y ruta 2"
                                },
                                "ciudad": {
                                    "S": "Chajarí"
                                },
                                "autor": {
                                    "S": "Carlos M. Grassini"
                                }
                            }
                        }
                    }
                }
            }
        },
        "url": {
            "S": "https://www.ecoregistros.org/ficha/Boana-pulchella"
        },
        "nombre_comun": {
            "S": "Ranita del Zarzal"
        },
        "scientific_name": {
            "S": "Boana pulchella"
        }
    },
    {
        "info": {
            "M": {
                "familia": {
                    "S": "Anura"
                },
                "orden": {
                    "S": "Amphibia"
                },
                "clase": {
                    "S": "Chordata"
                },
                "filo": {
                    "S": "Animalia"
                },
                "registers": {
                    "M": {
                        "0": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2019/06/13/336697/m_Ssinax-sp..jpg"
                                },
                                "ciudad": {
                                    "S": "Reserva Privada Senderos del Monte"
                                },
                                "autor": {
                                    "S": "Alejandro Powell"
                                }
                            }
                        }
                    }
                }
            }
        },
        "url": {
            "S": "https://www.ecoregistros.org/ficha/Scinax-sp."
        },
        "nombre_comun": {
            "S": ""
        },
        "scientific_name": {
            "S": "Scinax sp."
        }
    },
    {
        "info": {
            "M": {
                "nombre_ingles": {
                    "S": "Leptodactylidae"
                },
                "familia": {
                    "S": "Anura"
                },
                "orden": {
                    "S": "Amphibia"
                },
                "clase": {
                    "S": "Chordata"
                },
                "filo": {
                    "S": "Animalia"
                },
                "registers": {
                    "M": {
                        "0": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/06/08/400249/m_Untitled.jpgrc2.jpg"
                                },
                                "zona": {
                                    "S": "Amarras del Gualeguaychú (área natural protegida privada)"
                                },
                                "ciudad": {
                                    "S": "Departamento Gualeguaychú"
                                },
                                "autor": {
                                    "S": "Rodolfo Julio Velazquez"
                                }
                            }
                        },
                        "1": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/06/08/400248/m_Untitled.jpgrc.jpg"
                                },
                                "zona": {
                                    "S": "Amarras del Gualeguaychú (área natural protegida privada)"
                                },
                                "ciudad": {
                                    "S": "Departamento Gualeguaychú"
                                },
                                "autor": {
                                    "S": "Rodolfo Julio Velazquez"
                                }
                            }
                        }
                    }
                }
            }
        },
        "url": {
            "S": "https://www.ecoregistros.org/ficha/Leptodactylus-luctator"
        },
        "nombre_comun": {
            "S": "Rana Criolla"
        },
        "scientific_name": {
            "S": "Leptodactylus luctator"
        }
    },
    {
        "info": {
            "M": {
                "familia": {
                    "S": "Anura"
                },
                "orden": {
                    "S": "Amphibia"
                },
                "clase": {
                    "S": "Chordata"
                },
                "filo": {
                    "S": "Animalia"
                },
                "registers": {
                    "M": {
                        "0": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2019/10/01/353755/m_copia-rana-bufonius.jpg"
                                },
                                "zona": {
                                    "S": "Zona urbana"
                                },
                                "ciudad": {
                                    "S": "Paraná"
                                },
                                "autor": {
                                    "S": "Néstor Trossero"
                                }
                            }
                        },
                        "1": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2019/05/29/334737/m_DSC01892.JPG"
                                },
                                "ciudad": {
                                    "S": "Concordia"
                                },
                                "autor": {
                                    "S": "Lucio Coronel"
                                }
                            }
                        },
                        "2": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2019/05/29/334734/m_DSC01894.JPG"
                                },
                                "ciudad": {
                                    "S": "Concordia"
                                },
                                "autor": {
                                    "S": "Lucio Coronel"
                                }
                            }
                        }
                    }
                }
            }
        },
        "url": {
            "S": "https://www.ecoregistros.org/ficha/Leptodactylus-bufonius"
        },
        "nombre_comun": {
            "S": "Rana Cavadora"
        },
        "scientific_name": {
            "S": "Leptodactylus bufonius"
        }
    },
    {
        "info": {
            "M": {
                "familia": {
                    "S": "Anura"
                },
                "orden": {
                    "S": "Amphibia"
                },
                "clase": {
                    "S": "Chordata"
                },
                "filo": {
                    "S": "Animalia"
                },
                "registers": {
                    "M": {
                        "0": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2019/10/04/354229/m_RANITA-RAYADA-IMG_1762.JPG"
                                },
                                "ciudad": {
                                    "S": "Refugio de Vida Silvestre - La Aurora del Palmar"
                                },
                                "autor": {
                                    "S": "Gustavo Puente"
                                }
                            }
                        }
                    }
                }
            }
        },
        "url": {
            "S": "https://www.ecoregistros.org/ficha/Leptodactylus-gracilis"
        },
        "nombre_comun": {
            "S": "Ranita Rayada"
        },
        "scientific_name": {
            "S": "Leptodactylus gracilis"
        }
    },
    {
        "info": {
            "M": {
                "familia": {
                    "S": "Anura"
                },
                "orden": {
                    "S": "Amphibia"
                },
                "clase": {
                    "S": "Chordata"
                },
                "filo": {
                    "S": "Animalia"
                },
                "registers": {
                    "M": {
                        "0": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2021/04/15/441064/m_173047112_4109792965708548_5743411711743846825_n.jpg"
                                },
                                "zona": {
                                    "S": "Zona urbana"
                                },
                                "ciudad": {
                                    "S": "Oro Verde"
                                },
                                "autor": {
                                    "S": "Néstor Trossero"
                                }
                            }
                        },
                        "1": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2021/01/08/428266/m_leptodactylus-latras-o-mist..jpg"
                                },
                                "zona": {
                                    "S": "Zona urbana"
                                },
                                "ciudad": {
                                    "S": "Paraná"
                                },
                                "autor": {
                                    "S": "Néstor Trossero"
                                }
                            }
                        },
                        "2": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/12/13/423853/m_Untitled.jpgran.jpg"
                                },
                                "zona": {
                                    "S": "Amarras del Gualeguaychú (área natural protegida privada)"
                                },
                                "ciudad": {
                                    "S": "Departamento Gualeguaychú"
                                },
                                "autor": {
                                    "S": "Rodolfo Julio Velazquez"
                                }
                            }
                        },
                        "3": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/07/18/404422/m_leptodactylus-latrans-2.jpg"
                                },
                                "zona": {
                                    "S": "Zona urbana"
                                },
                                "ciudad": {
                                    "S": "Paraná"
                                },
                                "autor": {
                                    "S": "Néstor Trossero"
                                }
                            }
                        },
                        "4": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/03/30/392165/m_Untitled.jpgRANALA.jpg"
                                },
                                "zona": {
                                    "S": "Amarras del Gualeguaychú (área natural protegida privada)"
                                },
                                "ciudad": {
                                    "S": "Departamento Gualeguaychú"
                                },
                                "autor": {
                                    "S": "Rodolfo Julio Velazquez"
                                }
                            }
                        },
                        "5": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/02/20/383636/m_14425505_1293021720721432_6957374575736102823_o_1293021720721432.jpg"
                                },
                                "ciudad": {
                                    "S": "Parque Nacional El Palmar"
                                },
                                "autor": {
                                    "S": "Violeta Lafarga"
                                }
                            }
                        },
                        "6": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2019/06/01/335099/m_DSC04563.JPG"
                                },
                                "ciudad": {
                                    "S": "Concordia"
                                },
                                "autor": {
                                    "S": "Lucio Coronel"
                                }
                            }
                        },
                        "7": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2019/01/31/313386/m_Leptodactylus-mystacinus--13-mar-2017.jpg"
                                },
                                "ciudad": {
                                    "S": "Gualeguay"
                                },
                                "autor": {
                                    "S": "Nicolas Chimento"
                                }
                            }
                        }
                    }
                }
            }
        },
        "url": {
            "S": "https://www.ecoregistros.org/ficha/Leptodactylus-mystacinus"
        },
        "nombre_comun": {
            "S": "Rana de Bigotes"
        },
        "scientific_name": {
            "S": "Leptodactylus mystacinus"
        }
    },
    {
        "info": {
            "M": {
                "nombre_ingles": {
                    "S": "Bufonidae"
                },
                "familia": {
                    "S": "Anura"
                },
                "orden": {
                    "S": "Amphibia"
                },
                "clase": {
                    "S": "Chordata"
                },
                "filo": {
                    "S": "Animalia"
                },
                "registers": {
                    "M": {
                        "0": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2021/01/01/427156/m_P1390769.jpg"
                                },
                                "zona": {
                                    "S": "Los Talas 1220"
                                },
                                "ciudad": {
                                    "S": "Concordia"
                                },
                                "autor": {
                                    "S": "María Alejandra Sosa"
                                }
                            }
                        },
                        "1": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/01/28/378145/m_large--6-.jpg"
                                },
                                "zona": {
                                    "S": "Campo Dri"
                                },
                                "ciudad": {
                                    "S": "Concordia"
                                },
                                "autor": {
                                    "S": "Maria Belén Dri"
                                }
                            }
                        },
                        "2": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/01/02/370810/m_SAPITO-CAVADOR-IMG_6021.JPG"
                                },
                                "zona": {
                                    "S": "Camino de la Costa"
                                },
                                "ciudad": {
                                    "S": "Gualeguaychú"
                                },
                                "autor": {
                                    "S": "Gustavo Puente"
                                }
                            }
                        },
                        "3": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/play.bmp"
                                },
                                "zona": {
                                    "S": "Amarras del Gualeguaychú (área natural protegida privada)"
                                },
                                "ciudad": {
                                    "S": "Departamento Gualeguaychú"
                                },
                                "autor": {
                                    "S": "Rodolfo Julio Velazquez"
                                }
                            }
                        },
                        "4": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/play.bmp"
                                },
                                "zona": {
                                    "S": "Amarras del Gualeguaychú (área natural protegida privada)"
                                },
                                "ciudad": {
                                    "S": "Departamento Gualeguaychú"
                                },
                                "autor": {
                                    "S": "Rodolfo Julio Velazquez"
                                }
                            }
                        },
                        "5": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/play.bmp"
                                },
                                "zona": {
                                    "S": "Amarras del Gualeguaychú (área natural protegida privada)"
                                },
                                "ciudad": {
                                    "S": "Departamento Gualeguaychú"
                                },
                                "autor": {
                                    "S": "Rodolfo Julio Velazquez"
                                }
                            }
                        }
                    }
                }
            }
        },
        "url": {
            "S": "https://www.ecoregistros.org/ficha/Rhinella-fernandezae"
        },
        "nombre_comun": {
            "S": "Sapito Cavador"
        },
        "scientific_name": {
            "S": "Rhinella fernandezae"
        }
    },
    {
        "info": {
            "M": {
                "nombre_ingles": {
                    "S": "Bufonidae"
                },
                "familia": {
                    "S": "Anura"
                },
                "orden": {
                    "S": "Amphibia"
                },
                "clase": {
                    "S": "Chordata"
                },
                "filo": {
                    "S": "Animalia"
                },
                "registers": {
                    "M": {
                        "0": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/12/25/425643/m_20201225_020640-01.jpg"
                                },
                                "zona": {
                                    "S": "Espejo y Remedios de Escalada"
                                },
                                "ciudad": {
                                    "S": "Concordia"
                                },
                                "autor": {
                                    "S": "María Alejandra Sosa"
                                }
                            }
                        }
                    }
                }
            }
        },
        "url": {
            "S": "https://www.ecoregistros.org/ficha/Rhinella-arenarum"
        },
        "nombre_comun": {
            "S": "Sapo Común"
        },
        "scientific_name": {
            "S": "Rhinella arenarum"
        }
    },
    {
        "info": {
            "M": {
                "familia": {
                    "S": "Anura"
                },
                "orden": {
                    "S": "Amphibia"
                },
                "clase": {
                    "S": "Chordata"
                },
                "filo": {
                    "S": "Animalia"
                },
                "registers": {
                    "M": {
                        "0": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2021/08/09/456593/m_DSCN2616.JPG"
                                },
                                "ciudad": {
                                    "S": "Área Natural Protegida Don Sebastián"
                                },
                                "autor": {
                                    "S": "Pablo Bruni"
                                }
                            }
                        },
                        "1": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2021/08/09/456592/m_20210807_235231.jpg"
                                },
                                "ciudad": {
                                    "S": "Área Natural Protegida Don Sebastián"
                                },
                                "autor": {
                                    "S": "Pablo Bruni"
                                }
                            }
                        },
                        "2": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2021/05/19/445204/m_P1090495-Casa.JPG"
                                },
                                "zona": {
                                    "S": "Espejo y Remedios de Escalada"
                                },
                                "ciudad": {
                                    "S": "Concordia"
                                },
                                "autor": {
                                    "S": "María Alejandra Sosa"
                                }
                            }
                        },
                        "3": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/12/11/423373/m_FB_IMG_1607691224402.jpg"
                                },
                                "zona": {
                                    "S": "Espejo y Remedios de Escalada"
                                },
                                "ciudad": {
                                    "S": "Concordia"
                                },
                                "autor": {
                                    "S": "María Alejandra Sosa"
                                }
                            }
                        },
                        "4": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2020/03/05/387111/m_sapito-r-2.jpg"
                                },
                                "zona": {
                                    "S": "Zona urbana"
                                },
                                "ciudad": {
                                    "S": "Paraná"
                                },
                                "autor": {
                                    "S": "Néstor Trossero"
                                }
                            }
                        },
                        "5": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2019/12/31/370557/m_sapo.jpg"
                                },
                                "zona": {
                                    "S": "Zona urbana"
                                },
                                "ciudad": {
                                    "S": "Paraná"
                                },
                                "autor": {
                                    "S": "Néstor Trossero"
                                }
                            }
                        },
                        "6": {
                            "M": {
                                "imgUrl": {
                                    "S": "https://www.ecoregistros.org/site/images/dataimages/2019/06/21/337804/m_20170827_013938.jpg"
                                },
                                "zona": {
                                    "S": "Inta Estación Experimental"
                                },
                                "ciudad": {
                                    "S": "Concordia"
                                },
                                "autor": {
                                    "S": "Eduardo Beltrocco"
                                }
                            }
                        }
                    }
                }
            }
        },
        "url": {
            "S": "https://www.ecoregistros.org/ficha/Odontophrynus-americanus"
        },
        "nombre_comun": {
            "S": "Escuercito Común"
        },
        "scientific_name": {
            "S": "Odontophrynus americanus"
        }
    },
    {
        "info": {
            "M": {
                "nombre_ingles": {
                    "S": "Hylidae"
                },
                "familia": {
                    "S": "Anura"
                },
                "orden": {
                    "S": "Amphibia"
                },
                "clase": {
                    "S": "Chordata"
                },
                "filo": {
                    "S": "Animalia"
                },
                "registers": {
                    "M": {}
                }
            }
        },
        "url": {
            "S": "https://www.ecoregistros.org/ficha/Scinax-granulatus"
        },
        "nombre_comun": {
            "S": "Ranita Roncadora"
        },
        "scientific_name": {
            "S": "Scinax granulatus"
        }
    }
]

function SpeciesCont(props) {
  const [data, dataSet] = useState(null)

  const getSpecies = () => {
    axios
      .get("https://2y0eh1tux1.execute-api.sa-east-1.amazonaws.com/default/species")
      .then((response) => {
        const dataResp = response.data
        const dataClone = JSON.parse(JSON.stringify(dataResp))                            // Otherwise original response.data is modified
        dataSet(unmarshall(dataClone.Items))
      })
      .catch((error) => {
        console.log("ERROR!!! : ", error)
        const testDataClone = JSON.parse(JSON.stringify(testData))   
        dataSet(unmarshall(testDataClone))
      })
  }

  useEffect(() => {
    getSpecies()
  }, [])

  const speciesItemList = []
  if(data){
    for(const species of data){
      speciesItemList.push(
        <SpeciesItem species={species}/>
      )
    }
  }
  
  return (
    <div className="speciesCont">
      {speciesItemList}
    </div>
  )
}

export default SpeciesCont;
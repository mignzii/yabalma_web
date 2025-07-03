import React from 'react';
import { ChevronRight, Shield, Users, Globe, Scale, Mail, Phone, Building2 } from 'lucide-react';

const ConditionsUtilisation = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec logo */}
      <div className=" text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
            Conditions Générales d'Utilisation
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-2">
            APPLICATION MOBILE YABALMA
          </p>
          <p className="text-sm sm:text-base text-gray-700">
            En vigueur au <span className="text-red-400 font-semibold">16/06/2025</span>
          </p>
          
          {/* Logo YABALMA */}
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="text-center">
                {/* Oiseau stylisé */}
                <div className="relative mb-2">
                 <img src="/LOGO.png" alt="" />
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
          
          {/* Introduction */}
          <div className="prose prose-gray max-w-none">
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              Les présentes conditions générales d'utilisation (dites « CGU ») ont pour objet l'encadrement juridique 
              des modalités de mise à disposition de l'application mobile et des services par YABALMA et de définir 
              les conditions d'accès et d'utilisation des services par « l'Utilisateur ».
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 mt-4 sm:mt-6">
              <p className="text-blue-800 font-medium text-sm sm:text-base">
                Toute inscription ou utilisation de l'application mobile implique l'acceptation sans aucune réserve ni 
                restriction des présentes CGU par l'utilisateur.
              </p>
            </div>
          </div>

          {/* Article 1 */}
          <section>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2 flex-shrink-0" />
              <span>Article 1 : Objet de l'application</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              L'application mobile YABALMA permet aux utilisateurs de commander des produits sur des sites de 
              E-commerce, tels que SHEIN, Tému (liste non exhaustive) et de se faire livrer grâce à une équipe 
              logistique. L'objectif est de faciliter le paiement à l'utilisateur avec la monnaie locale et de lui proposer 
              un service de livraison en parallèle.
            </p>
          </section>

          {/* Article 2 */}
          <section>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2 flex-shrink-0" />
              <span>Article 2 : Édition de l'application</span>
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                L'édition de l'application mobile est assurée par la société YABALMA, SAS au capital de 6106 euros, 
                immatriculée au Registre du Commerce et des Sociétés de Dakar sous le numéro SN.DKR.2024.B.42919.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                <div className="break-words">
                  <p className="font-medium text-gray-900">Siège social :</p>
                  <p className="text-gray-700">Rue 37 x 20, villa n°9816, Médina, Sénégal</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">NINEA :</p>
                  <p className="text-gray-700">011611664</p>
                </div>
                <div className="break-words">
                  <p className="font-medium text-gray-900">Email :</p>
                  <p className="text-gray-700">support@yabalma.com</p>
                </div>
                <div className="break-words">
                  <p className="font-medium text-gray-900">Directeur de publication :</p>
                  <p className="text-gray-700">Ibrahima Miniane DIOUF</p>
                </div>
              </div>
            </div>
          </section>

          {/* Article 3 */}
          <section>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2 flex-shrink-0" />
              <span>Article 3 : Accès à l'application mobile</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              L'application est dotée d'un accès client qui possède différents services :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
              {[
                'Création de compte',
                'Commande d\'articles depuis l\'interface intégrée',
                'Commande d\'articles depuis le collage de lien',
                'Regroupement de colis',
                'Choix de l\'option de transport',
                'Suivi de son colis',
                'Messagerie + FAQ'
              ].map((service, index) => (
                <div key={index} className="flex items-center space-x-2 p-2 sm:p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm text-gray-700">{service}</span>
                </div>
              ))}
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4">
              <p className="text-yellow-800 text-xs sm:text-sm">
                <strong>Authentification :</strong> L'utilisateur doit s'identifier à l'aide de son numéro de téléphone. 
                Un code OTP sera généré à chaque reconnexion pour garantir la sécurité de l'application.
              </p>
            </div>
          </section>

          {/* Article 4 */}
          <section>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2 flex-shrink-0" />
              <span>Article 4 : Collecte des données</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              L'application mobile assure à l'Utilisateur une collecte et un traitement d'informations personnelles 
              dans le respect du RGPD.
            </p>
            <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
              <p className="text-blue-800 font-medium mb-2 text-xs sm:text-sm">
                En vertu du RGPD, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et 
                d'opposition de ses données personnelles.
              </p>
              <p className="text-blue-700 text-xs sm:text-sm">
                L'Utilisateur exerce ce droit par mail à support@yabalma.com, via le formulaire de contact dans 
                l'application, ou via son espace personnel.
              </p>
            </div>
          </section>

          {/* Article 6 */}
          <section>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Article 6 : Propriété intellectuelle
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              Les marques, logos, signes ainsi que tous les contenus de l'application mobile (textes, images, sons…) 
              font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4">
              <p className="text-red-800 font-medium text-xs sm:text-sm">
                La marque YABALMA est une marque déposée par YABALMA SAS. Toute représentation et/ou reproduction 
                et/ou exploitation partielle ou totale de cette marque, de quelque nature que ce soit, est totalement prohibée.
              </p>
            </div>
          </section>

          {/* Article 7 */}
          <section>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
              <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2 flex-shrink-0" />
              <span>Article 7 : Responsabilité</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              Les sources des informations diffusées sur l'application mobile YABALMA sont réputées fiables mais 
              l'application ne garantit pas qu'il soit exempt de défauts, d'erreurs ou d'omissions.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 sm:p-4">
              <p className="text-orange-800 font-medium text-xs sm:text-sm">
                L'Utilisateur s'assure de garder, lors de la connexion son code OTP secret. Toute divulgation du code, 
                quelle que soit sa forme, est interdite. Il assume les risques liés à l'utilisation de son identifiant et 
                code de connexion.
              </p>
            </div>
          </section>

          {/* Article 8 */}
          <section>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Article 8 : Liens hypertextes
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Des liens hypertextes peuvent être présents sur l'application. L'Utilisateur est informé qu'en cliquant 
              sur ces liens, il pourrait sortir de l'application mobile YABALMA. Cette dernière n'a pas de contrôle sur 
              les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.
            </p>
          </section>

          {/* Article 10 */}
          <section>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Article 10 : Dysfonctionnement de l'application par l'utilisateur
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4">
              <p className="text-red-800 font-medium text-xs sm:text-sm">
                L'utilisateur ne doit en aucun cas, effectuer des actions dans l'application dans le but de la mettre en 
                disfonctionnement, de la faire bugger, de la mettre en arrêt, ou d'impacter son bon fonctionnement de 
                quelque manière que ce soit. Ces actions sont passibles de recours en justice qui seront pris en charge par l'Utilisateur.
              </p>
            </div>
          </section>

          {/* Article 11 */}
          <section>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Article 11 : Droit applicable et juridiction compétente
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              La législation sénégalaise s'applique au présent contrat. En cas d'absence de résolution amiable d'un 
              litige né entre les parties, les tribunaux sénégalais seront seuls compétents pour en connaître.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t pt-6 sm:pt-8">
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 flex-shrink-0" />
                <span>Contact</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-2">
                Pour toute question relative à l'application des présentes CGU, vous pouvez joindre l'éditeur :
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 text-blue-600 hover:text-blue-700">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:support@yabalma.com" className="underline text-sm sm:text-base break-all">
                  support@yabalma.com
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ConditionsUtilisation;
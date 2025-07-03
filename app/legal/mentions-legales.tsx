import React from 'react';
import { Building2, Mail, Globe, Server, Shield, User, FileText } from 'lucide-react';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec logo */}
      <div className="text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
            Mentions Légales
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-2">
            SITE WEB YABALMA
          </p>
          <p className="text-sm sm:text-base text-gray-700">
            Dernière mise à jour : <span className="text-red-400 font-semibold">Juillet 2025</span>
          </p>
          
          {/* Logo YABALMA */}
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="text-center">
                <img src="/LOGO.png" alt="Logo YABALMA" />
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
              Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la 
              Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs 
              et visiteurs du site les informations suivantes :
            </p>
          </div>

          {/* Responsable de publication */}
          <section>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
              <User className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2 flex-shrink-0" />
              <span>Responsable de publication</span>
            </h2>
            <div className="bg-blue-50 rounded-lg p-4 sm:p-6">
              <div className="grid grid-cols-1 gap-4 text-sm sm:text-base">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">YABALMA SAS</p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Capital social :</strong> 6 106 euros</p>
                    <p><strong>Immatriculation :</strong> Registre du Commerce et des Sociétés de Dakar</p>
                    <p><strong>Numéro RCS :</strong> SN.DKR.2024.B.42919</p>
                    <p><strong>NINEA :</strong> 011611664</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Siège social</p>
                  <p className="text-gray-700">Rue 37 x 20, villa n°9816, Médina, Sénégal</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Activités</p>
                  <p className="text-gray-700">
                    Développement informatique, création, conception, réalisation, exploitation, 
                    développement, achat et vente de logiciels, progiciels, bases de données et sites internet.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Contact</p>
                  <div className="flex items-center space-x-2 text-blue-600">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:YabalmaInternational@gmail.com" className="hover:underline">
                      YabalmaInternational@gmail.com
                    </a>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Directeur de la publication</p>
                  <p className="text-gray-700">Ibrahima Miniane DIOUF</p>
                  <div className="flex items-center space-x-2 text-blue-600 mt-1">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:YabalmaInternational@gmail.com" className="hover:underline">
                      YabalmaInternational@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Édition du site */}
          <section>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2 flex-shrink-0" />
              <span>Édition du site</span>
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <div className="grid grid-cols-1 gap-4 text-sm sm:text-base">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Hetzner SARL</p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>PDG :</strong> Martin Hetzner, Stephan Konvickova, Günther Müller</p>
                    <p><strong>Activités :</strong> Hébergement web, certificats SSL, colocation, enregistrement de domaine</p>
                    <p><strong>Bureau d'enregistrement :</strong> Ansbach, HRB 6089</p>
                    <p><strong>TVA :</strong> DE 812871812</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Contact</p>
                  <div className="flex items-center space-x-2 text-blue-600">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:info@hetzner.com" className="hover:underline">
                      info@hetzner.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Hébergement */}
          <section>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
              <Server className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2 flex-shrink-0" />
              <span>Hébergement</span>
            </h2>
            <div className="bg-green-50 rounded-lg p-4 sm:p-6">
              <div className="grid grid-cols-1 gap-4 text-sm sm:text-base">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">OVH SAS</p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Capital social :</strong> 50 000 000 €</p>
                    <p><strong>RCS :</strong> Lille Métropole 424 761 419 00045</p>
                    <p><strong>Code APE :</strong> 2620Z</p>
                    <p><strong>N° TVA :</strong> FR 22 424 761 419</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Siège social</p>
                  <p className="text-gray-700">2 rue Kellermann - 59100 Roubaix - France</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Société mère</p>
                  <p className="text-gray-700">
                    OVH SAS est une filiale de la société OVH Groupe SA, société immatriculée au RCS de Lille 
                    sous le numéro 537 407 926 sise 2, rue Kellermann, 59100 Roubaix.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Directeur de la publication</p>
                  <p className="text-gray-700">Michel Paulin</p>
                </div>
              </div>
            </div>
          </section>

          {/* Données personnelles */}
          <section>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2 flex-shrink-0" />
              <span>Données personnelles</span>
            </h2>
            <div className="bg-purple-50 rounded-lg p-4 sm:p-6">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                D'une façon générale, vous pouvez visiter notre site sur Internet sans avoir à décliner votre identité 
                et à fournir des informations personnelles vous concernant.
              </p>
              <div className="bg-purple-100 border border-purple-200 rounded-lg p-3 sm:p-4">
                <p className="text-purple-800 font-medium text-xs sm:text-sm">
                  <strong>Collecte d'informations :</strong> Nous pouvons parfois vous demander des informations, 
                  par exemple pour utiliser le formulaire de contact. Ces données sont traitées conformément 
                  au RGPD et à notre politique de confidentialité.
                </p>
              </div>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2 flex-shrink-0" />
              <span>Propriété intellectuelle</span>
            </h2>
            <div className="bg-orange-50 rounded-lg p-4 sm:p-6">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                L'ensemble de ce site relève de la législation sénégalaise et internationale sur le droit d'auteur 
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les 
                documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <div className="bg-orange-100 border border-orange-200 rounded-lg p-3 sm:p-4">
                <p className="text-orange-800 font-medium text-xs sm:text-sm">
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est 
                  formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
              </div>
            </div>
          </section>

          {/* Droit applicable */}
          <section>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Droit applicable
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Le présent site est soumis au droit sénégalais. En cas de litige, les tribunaux sénégalais 
              seront seuls compétents.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t pt-6 sm:pt-8">
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 flex-shrink-0" />
                <span>Contact</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a href="mailto:support@yabalma.com" className="underline text-sm sm:text-base break-all">
                    support@yabalma.com
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
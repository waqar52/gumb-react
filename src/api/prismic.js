import Prismic from 'prismic-javascript';
import { Client } from '../../prismic-configuration'

export default {

    getCategories: async language => await Client().query([ Prismic.Predicates.at('document.type', 'category')], { lang: language }),

    getDocumentTitlesByCategoryId: async (categoryId, language) => {
        return await Client().query([
            Prismic.Predicates.at('document.type', 'faq'),
            Prismic.Predicates.at('my.faq.category', categoryId)
        ], { fetch: ['faq.title', 'faq.category'], lang: language });
    },

    getDocumentByUID: async (uid, language) => await Client().getByUID('faq', uid, { lang: language }),

    getTeam: async language => {
        return await Client().query([
            Prismic.Predicates.at('document.type', 'team')
        ], { fetchLinks: 'social_media.icon', lang: language });
    },

    getProblemsCategories: async language => {
        return await Client().query([
            Prismic.Predicates.at('document.type', 'how_can_we_help')
        ], { fetchLinks: 'type_of_problem.title', lang: language });
    },

    getTypesOfProblemsByCategoryId: async (id, language) => {
        return await Client().query([
            Prismic.Predicates.at('document.type', 'type_of_problem'),
            Prismic.Predicates.at('my.type_of_problem.category', id)
        ], { lang: language });
    },

    getSearchResults: async (text, language) => {
        return await Client().query([
            Prismic.Predicates.at('document.type', 'faq'),
            Prismic.Predicates.fulltext('document', text)
        ], { lang: language });
    },

    getPrivacy: async language => await Client().query(Prismic.Predicates.at('document.type', 'privacy'), { lang: language }),

    getTerms: async language =>  await Client().query(Prismic.Predicates.at('document.type', 'terms'), { lang: language }),

    getImprint: async language =>  await Client().query(Prismic.Predicates.at('document.type', 'imprint'), { lang: language })
};
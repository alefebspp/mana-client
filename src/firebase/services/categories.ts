import {
  query,
  where,
  getDocs,
  doc,
  setDoc,
  limit,
  orderBy
} from 'firebase/firestore'
import { v4 as generateUUID } from 'uuid'

import {
  categoriesCollection,
  Category,
  NatureType
} from '../collections/categories'

export interface DefaultResponse {
  success: boolean
  message: string
}

interface FindCategoryResponse extends DefaultResponse {
  category?: Category
}

interface CreateCategoryRequest {
  description: string
  nature: NatureType
  belongs_to: string | null
}

interface ListCategoriesParams {
  parentCategoryId?: string
}

export const getBaseCategories = async (): Promise<Category[]> => {
  const q = query(
    categoriesCollection,
    where('user_id', '==', null),
    orderBy('code')
  )

  const docSnap = await getDocs(q)

  const categories: Category[] = []

  docSnap.forEach((doc) => {
    const category = doc.data() as Category
    categories.push(category)
  })

  return categories
}

export const findCategory = async (
  categoryId: string
): Promise<FindCategoryResponse> => {
  const q = query(categoriesCollection, where('id', '==', categoryId), limit(1))

  const docSnap = await getDocs(q)

  if (docSnap.empty) {
    return {
      success: false,
      message: 'Categoria não existe'
    }
  }

  const category = docSnap.docs[0].data() as Category

  return {
    success: true,
    message: '',
    category
  }
}

export const listCategories = async ({
  parentCategoryId
}: ListCategoriesParams): Promise<Category[]> => {
  let q = query(
    categoriesCollection,
    where('user_id', '==', null),
    orderBy('code')
  )

  if (parentCategoryId) {
    const { category } = await findCategory(parentCategoryId)

    if (category) {
      q = query(
        categoriesCollection,
        where('belongs_to', '==', parentCategoryId),
        orderBy('code')
      )

      const docSnap = await getDocs(q)

      const categories: Category[] = []

      docSnap.forEach((doc) => {
        const category = doc.data() as Category
        categories.push(category)
      })

      return [category, ...categories]
    }
  }

  const docSnap = await getDocs(q)

  const categories: Category[] = []

  docSnap.forEach((doc) => {
    const category = doc.data() as Category
    categories.push(category)
  })

  return categories
}

export const createCategory = async (
  params: CreateCategoryRequest
): Promise<DefaultResponse> => {
  const { belongs_to, ...rest } = params

  const categories = await listCategories(
    belongs_to ? { parentCategoryId: belongs_to } : {}
  )

  const lastCode = categories[categories.length - 1].code

  let categoryCode: string = String(parseInt(lastCode) + 1)

  if (belongs_to && categories.length == 1) {
    categoryCode = `${lastCode.toLocaleString()}.${1}`
  }

  if (belongs_to && categories.length > 1) {
    const splitCode = lastCode.toLocaleString().split('.')
    const splitLastCode = parseInt(splitCode[splitCode.length - 1])
    splitCode.pop()
    splitCode.push(String(splitLastCode + 1))
    categoryCode = splitCode.join('.')
  }

  const formatedCategory = {
    ...rest,
    code: categoryCode,
    id: generateUUID(),
    belongs_to: !belongs_to ? null : belongs_to,
    user_id: null
  }

  await setDoc(doc(categoriesCollection), formatedCategory)

  return {
    success: true,
    message: 'Categoria criada com sucesso!'
  }
}

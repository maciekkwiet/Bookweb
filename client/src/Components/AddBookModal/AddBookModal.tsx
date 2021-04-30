import { useEffect, useState } from 'react';
import { Axios } from '../../helpers/axios';
import { useToasts } from 'react-toast-notifications';
import { Modal } from '../Modal/Modal';
import { BigLabel } from '../BigLabel/BigLabel';
import { Button } from '../Button/Button';
import {
  Flex,
  TitleWrapper,
  Wrapper,
  BookInfo,
  Form,
  InputWrapper,
  Input,
  Label,
  BookImage,
  AddImageInput,
  Image,
  BookDescription,
  ButtonWrapper,
  AddImageLabel,
} from './AddBookModalStyles';

export const AddBookModal = ({ showModal, setShowModal }) => {
  const [image, setImage] = useState<File | null>();
  const [preview, setPreview] = useState<string | null>();
  const [values, setValues] = useState({
    isbn: 0,
    title: '',
    name: '',
    surname: '',
    publisher_name: '',
    num_pages: 0,
    release_date: new Date(),
    description: '',
    cover: '',
  });
  const { addToast } = useToasts();

  const handleClick = async () => {
    try {
      // console.log(values);
      // Access to XMLHttpRequest at 'http://localhost:8080/api/books/' from origin 'http://localhost:3000' has been
      // blocked by CORS policy: Response to preflight request doesn't pass access control check: It does not have HTTP
      //  ok status.
      await Axios.post('/api/books/', values);
      addToast(`Dodano książkę:  ${values?.title}`, {
        appearance: 'success',
        autoDismiss: true,
      });
    } catch (err) {
      addToast(`Nie udało się dodać książki: ${values?.title}`, {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setValues({
      ...values,
      [e.target.name]: value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === 'image') {
      setImage(file);
    }
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = () => {
        setPreview(reader.result as string);
        setValues({
          ...values,
          cover: reader.result as string,
        });
      };
    } else {
      setPreview(null);
    }
  }, [image, values]);

  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <Flex>
        <TitleWrapper>
          <BigLabel title={'Dodaj nową książkę'}></BigLabel>
        </TitleWrapper>
        <Wrapper>
          <BookInfo>
            <Form>
              <InputWrapper>
                <Label htmlFor="isbn">ISBN</Label>
                <Input
                  id="isbn"
                  type="number"
                  name="isbn"
                  value={values.isbn}
                  onChange={handleChange}
                  placeholder="ISBN"
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="title">Tytuł książki</Label>
                <Input
                  id="title"
                  type="text"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  placeholder="Tytuł książki"
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="authorName">Imię autora</Label>
                <Input
                  id="authorName"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Imię autora"
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="authorSurname">Nazwisko autora</Label>
                <Input
                  id="authorSurname"
                  type="text"
                  name="surname"
                  value={values.surname}
                  onChange={handleChange}
                  placeholder="Nazwisko autora"
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="publisher">Wydawnictwo</Label>
                <Input
                  id="publisher"
                  type="text"
                  name="publisher_name"
                  value={values.publisher_name}
                  onChange={handleChange}
                  placeholder="Wydawnictwo"
                />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="pages">Liczba stron</Label>
                <Input
                  id="pages"
                  type="number"
                  name="num_pages"
                  value={values.num_pages}
                  onChange={handleChange}
                  placeholder="Liczba stron"
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="date">Data wydania</Label>
                <Input
                  id="date"
                  type="date"
                  name="release_date"
                  onChange={handleChange}
                  placeholder="Data wydania"
                  required
                />
              </InputWrapper>
            </Form>
          </BookInfo>
          <BookImage>
            {preview ? (
              <Image
                src={preview}
                onClick={() => {
                  setImage(null);
                }}
              />
            ) : (
              <AddImageLabel htmlFor="addImage">Add Image</AddImageLabel>
            )}
            <AddImageInput name="cover" id="addImage" type="file" accept="image/*" onChange={handleImage} />
          </BookImage>
        </Wrapper>
        <BookDescription
          name="description"
          placeholder={'Opis książki'}
          value={values.description}
          onChange={handleChange}
        />
        <ButtonWrapper>
          <Button type="submit" onClick={handleClick}>
            Opublikuj
          </Button>
        </ButtonWrapper>
      </Flex>
    </Modal>
  );
};



<script>
  import { Modal } from 'flowbite'

  // select the two elements that we'll work with
  const $buttonElement: HTMLElement | null = document.querySelector('#button');
  const $modalElement: HTMLElement | null = document.querySelector('#defaultModal');

  // create a new modal component
  const modal = new Modal($modalElement);

  // toggle the visibility of the modal when clicking on the button
  if ($buttonElement) {
    $buttonElement.addEventListener('click', () => modal.toggle());
  }
</script>

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  posts: any[] = [
    {
      title: 'Melhores Filmes de Ação de Todos os Tempos',
      description: 'Discuta os melhores filmes de ação que você já viu. Compartilhe suas opiniões sobre cenas de ação, enredos emocionantes e atuações memoráveis.',
      author: 'QuerinTarantino',
      image: 'assets/imgs/avatar1.jpg'
    },
    {
      title: 'Bandas Alternativas Emergentes',
      description: 'Descubra e discuta novas bandas alternativas que estão emergindo na cena musical. Compartilhe links para músicas, vídeos e opiniões sobre os próximos talentos musicais.',
      author: 'quevinSpace',
      image: 'assets/imgs/avatar2.jpg'
    },
    {
      title: 'Animações que Marcaram Época',
      description: 'Explore o mundo das animações e desenhos animados que transcenderam as expectativas. Desde clássicos da infância até animações modernas, compartilhe suas favoritas.',
      author: 'JhonnyBravo',
      image: 'assets/imgs/avatar3.jpg'
    },
    {
      title: 'Filmes de Terror que Deixaram uma Impressão',
      description: 'Compartilhe suas experiências e opiniões sobre filmes de terror que realmente assustaram. Quais são os mais assustadores e por quê?',
      author: 'AmanteDoTerror',
      image: 'assets/imgs/avatar4.jpg'
    },
    {
      title: 'Novos Álbuns de Rock Mais Promissores',
      description: 'Descubra os últimos lançamentos no mundo do rock e compartilhe suas críticas sobre os álbuns mais promissores da atualidade.',
      author: 'RockerForever',
      image: 'assets/imgs/avatar5.jpg'
    },
    {
      title: 'Clássicos da Animação Japonesa',
      description: 'Explore os clássicos do anime que definiram o gênero. Discuta sobre temas, personagens e influências culturais.',
      author: 'JapanimationFan',
      image: 'assets/imgs/avatar6.jpg'
    },
    {
      title: 'Trilhas Sonoras Memoráveis do Cinema',
      description: 'Relembre e discuta trilhas sonoras que se tornaram icônicas no mundo do cinema. Como a música contribui para a experiência cinematográfica?',
      author: 'CineMusicLover',
      image: 'assets/imgs/avatar7.jpg'
    },
    {
      title: 'Animações Infantis que Encantam Gerações',
      description: 'Compartilhe suas animações favoritas da infância e discuta como esses desenhos continuam a encantar crianças ao longo do tempo.',
      author: 'KidsAnimationFan',
      image: 'assets/imgs/avatar8.jpg'
    }
  ];

  filteredPosts: any[];

  constructor() {
    this.filteredPosts = this.posts; // Initialize with all posts
  }

  ngOnInit() {}

  filterPosts(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm && searchTerm.trim() !== '') {
      this.filteredPosts = this.posts.filter(post => {
        return post.title.toLowerCase().includes(searchTerm) || 
               post.description.toLowerCase().includes(searchTerm) ||
               post.author.toLowerCase().includes(searchTerm);
      });
    } else {
      this.filteredPosts = this.posts;
    }
  }
}

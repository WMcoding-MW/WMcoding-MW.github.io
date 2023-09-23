var cy = cytoscape({
    container: document.getElementById('cy'),
  
    boxSelectionEnabled: false,
    autounselectify: true,
  
    style: cytoscape.stylesheet()
      .selector('node')
        .css({
          'content': 'data(name)',
          'text-valign': 'top',
          'text-halign': 'center',
          'color': 'white',
          'text-outline-width': 1,
          'text-outline-color': '#333',
          'background-color': '#D4AF37' //node colour
        })
      .selector(':selected')
        .css({
          'background-color': 'black',
          'line-color': 'black',
          'target-arrow-color': 'black',
          'source-arrow-color': 'black',
          'text-outline-color': 'black'
        }),
  
    elements: {
      nodes: [
        { data: { id: 'root', name: 'Hello World/Root', href: './blogPostings/entry1.html' } },
        { data: { id: 'e1', name: 'Hashing Algorithms', href: './blogPostings/entry2.html' } },
        { data: { id: 'math', name: 'World Of Math', href: './oops.html'} },
        { data: { id: 'cs', name: 'Computer Science', href: './oops.html'} },
        { data: { id: 'e2', name: 'Basic Discrete Math Terminology', href: './blogPostings/entry3.html'} },
        { data: { id: 'AA', name: 'Abstract Algebra', href: './blogPostings/abstractAlgebra.html'} },
        { data: { id: 'e3', name: 'Binary Operations', href: './blogPostings/entry4.html'} },
        { data: { id: 'e4', name: 'Intro to groups (Symmetric and basic group properties)', href: './blogPostings/entry5.html'} },
        { data: { id: 'e5', name: 'More on Symmetric groups and cycles', href: './blogPostings/entry6.html'} },
        { data: { id: 'e6', name: 'Order of a group/element and inverses', href: './blogPostings/entry7.html'} },
        { data: { id: 'e7', name: 'Subgroups and center of a group', href: './blogPostings/entry8.html'} },
        { data: { id: 'e8', name: 'Music Recommendation System', href: './blogPostings/entry9.html'} },
        { data: { id: 'MF', name: 'Mathematical Finance', href: './blogPostings/entry10.html'} }
      ],
      edges: [
        { data: { source: 'root', target: 'math' } },
        { data: { source: 'root', target: 'cs' } },
        { data: { source: 'cs', target: 'e1' } },
        { data: { source: 'math', target: 'e1' } },
        { data: { source: 'math', target: 'e2' } },
        { data: { source: 'math', target: 'AA' } },
        { data: { source: 'AA', target: 'e2' } },
        { data: { source: 'AA', target: 'e3'} },
        { data: { source: 'e4', target: 'e3'} },
        { data: { source: 'e5', target: 'e4'} },
        { data: { source: 'e6', target: 'e5'} },
        { data: { source: 'e6', target: 'e4'} },
        { data: { source: 'e7', target: 'e6'} },
        { data: { source: 'e8', target: 'cs'} },
        { data: { source: 'MF', target: 'math'} }


      ]
    },
  
    layout: {
      name: 'random',
      //padding: 10
    }
  });
  
  cy.on('tap', 'node', function(){
    try { // your browser may block popups
      window.open( this.data('href') );
    } catch(e){ // fall back on url change
      window.location.href = this.data('href');
    }
  });
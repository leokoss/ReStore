using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.Enteties;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    public class ProductsControler : BaseApiController
    {
        private readonly StoreContext _context;

        public ProductsControler(StoreContext context)
        {
            _context = context;

        }

        [HttpGet]

        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return await _context.Products.ToListAsync();

        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            return await _context.Products.FindAsync(id);

        }


    }
}
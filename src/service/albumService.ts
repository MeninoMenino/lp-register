import prismaClient from "../prisma";
import { Album } from "../model/album";

class AlbumService {

    async getAlbumByName(name: string) {
        try{
            return await prismaClient.album.findMany({
                where: {
                    name: {
                        contains: name,
                        mode: 'insensitive'
                    }
                }
            })
        } catch(error) {
            throw new Error();
        }
    }

    async getAlbumByArtist(artist: string) {
        try{
            return await prismaClient.album.findMany({
                where: {
                    artist: {
                        contains: artist,
                        mode: 'insensitive'
                    }
                }
            })
        } catch(error) {
            throw new Error();
        }
    }

    async getAlbumByYear(year: number) {
        try{
            return await prismaClient.album.findMany({
                where: {
                    year: year
                }
            })
        } catch(error) {
            throw new Error();
        }
    }

    async getAlbumByGenre(genre: string) {
        try{
            return await prismaClient.album.findMany({
                where: {
                    genres: {
                        has: genre
                    }
                }
            })
        } catch(error) {
            throw new Error();
        }
    }

    async listRegisteredAlbums() {
        try{
            return await prismaClient.album.findMany();
        } catch(error) {
            throw new Error();
        }
    }

    async registerAlbum(album: Album) {
        try{
            await prismaClient.album.create({data: {
                name: album.name,
                artist: album.artist,
                year: album.year,
                genres: album.genres
            }});
        } catch(error) {
            throw new Error();
        }
    }

    async deleteAlbum(id: string) {
        try{
            await prismaClient.album.delete({
                where: {
                    id: id
                }
            });
        } catch(error) {
            throw new Error();
        }
    }
}

export { AlbumService }